import React, { useEffect, useMemo, useState } from 'react';
import {
  FileText,
  RefreshCw,
  CalendarDays,
  FileSpreadsheet,
  FileDown,
  Trash,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
  Eye,
  Trash2
} from 'lucide-react';
import {
  Popover, PopoverContent, PopoverTrigger
} from '@/components/ui/popover';
import {
  Button,  
} from '@/components/ui/button';
import {
  Input,  
} from '@/components/ui/input';
// import {
//   Label 
// } from '@/components/ui/label';
import {
  Checkbox,
} from '@/components/ui/checkbox';

import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
  } from '../ui/table';
  import {
      DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
  } from '../ui/dropdown-menu';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Calendar as CalendarComponent } from '../ui/calendar';
import type { UserLog } from './types';
import { toast } from 'sonner';
import type { DateRange } from 'react-day-picker';


interface Props {
  logs: UserLog[];
}

export const UserLogsTab: React.FC<Props> = ({ logs }) => {
  const [search, setSearch] = useState('');
  const [filteredLogs, setFilteredLogs] = useState<UserLog[]>(logs);
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedLogs, setSelectedLogs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<keyof UserLog | null>('timestamp');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [lastRefresh, setLastRefresh] = useState(new Date());

  // Filter and sort
  const sortedLogs = useMemo(() => {
    const sorted = [...logs];
    if (sortField && sortDir) {
      sorted.sort((a, b) => {
        const aVal = a[sortField]!.toString().toLowerCase();
        const bVal = b[sortField]!.toString().toLowerCase();
        return sortDir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      });
    }
    return sorted;
  }, [logs, sortField, sortDir]);

  const paginatedLogs = useMemo(() => {
    const result = sortedLogs
      .filter(log => {
        const matchSearch = log.userName.toLowerCase().includes(search.toLowerCase())
          || log.action.toLowerCase().includes(search.toLowerCase());
        const matchDate = (!dateRange.from || log.date >= dateRange.from)
          && (!dateRange.to || log.date <= dateRange.to);
        return matchSearch && matchDate;
      });
    setFilteredLogs(result);
    return result.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  }, [sortedLogs, search, dateRange, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);

  // Sorting UI
  const getSortIcon = (field: keyof UserLog) => {
    if (sortField !== field) return <ArrowUpDown className="w-4 h-4 opacity-50" />;
    return sortDir === 'asc'
      ? <ArrowUp className="w-4 h-4 text-[var(--theme-primary)]" />
      : <ArrowDown className="w-4 h-4 text-[var(--theme-primary)]" />;
  };

  const toggleSort = (field: keyof UserLog) => {
    if (sortField === field) {
      setSortDir(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDir('asc');
    }
  };

  const exportToCSV = () => {
    const headers = ['Timestamp', 'User Name', 'Role Name', 'Action', 'Performed By'];
    const content = filteredLogs.map(log => [
      log.timestamp, log.userName, log.roleName, log.action, log.performedBy
    ]);
    const csv = [headers, ...content].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'user-logs.csv';
    link.click();
  };

  const exportToPDF = () => {
    const html = `
      <html><head><title>User Logs</title></head><body>
      <h1>User Activity Logs</h1>
      <table border="1" style="width:100%; border-collapse: collapse;">
        <thead><tr><th>Timestamp</th><th>User</th><th>Role</th><th>Action</th><th>By</th></tr></thead>
        <tbody>
          ${filteredLogs.map(log => `
            <tr><td>${log.timestamp}</td><td>${log.userName}</td><td>${log.roleName}</td>
            <td>${log.action}</td><td>${log.performedBy}</td></tr>
          `).join('')}
        </tbody>
      </table></body></html>`;
    const w = window.open('', '_blank');
    if (w) {
      w.document.write(html);
      w.document.close();
      w.print();
    }
  };

  const handleDeleteSelected = () => {
    toast.success(`Deleted ${selectedLogs.length} logs`);
    setSelectedLogs([]);
  };

  // Pagination effects
  useEffect(() => {
    setCurrentPage(1);
  }, [search, dateRange]);

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[var(--theme-primary)]" />
            User Activity Logs
          </CardTitle>

          <div className="flex gap-2 flex-wrap">
            <Button style={{backgroundColor:"#ffffff"}} size="sm" variant="outline" onClick={() => setLastRefresh(new Date())}>
              <RefreshCw className="w-4 h-4 mr-1" />
              Refresh
            </Button>
            <span className="text-sm text-muted-foreground self-center">
              Last updated: {lastRefresh.toLocaleTimeString()}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center mb-4">
          <Input
            placeholder="Search logs..."
            className="max-w-sm w-full sm:w-auto"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <Popover>
            <PopoverTrigger asChild>
              <Button style={{backgroundColor:"#ffffff"}}  variant="outline" className="flex items-center gap-2 w-full sm:w-auto">
                <CalendarDays className="w-4 h-4" />
                {dateRange.from ? (
                  `${dateRange.from.toLocaleDateString()}${dateRange.to ? ` - ${dateRange.to.toLocaleDateString()}` : ''}`
                ) : 'Pick a date range'}
              </Button>
            </PopoverTrigger>
            <PopoverContent  className="w-auto p-0" align="start">
              <CalendarComponent
              
                mode="range"
                selected={dateRange as DateRange}
                onSelect={(range) => setDateRange(range || {})}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>

          <Select value={itemsPerPage.toString()} onValueChange={val => setItemsPerPage(+val)}>
            <SelectTrigger style={{backgroundColor:"#ffffff"}} className="w-full sm:w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[10, 25, 50, 100].map(v => (
                <SelectItem key={v} value={v.toString()}>{v} per page</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedLogs.length > 0 && (
          <div className="p-3 bg-[var(--theme-secondary)]/30 rounded-lg mb-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>{selectedLogs.length} logs selected</span>
            <div className="flex gap-2 flex-wrap">
              <Button style={{backgroundColor:"#ffffff"}}  onClick={exportToCSV} size="sm">
                <FileSpreadsheet className="w-4 h-4 mr-1" />
                Export
              </Button>
              <Button style={{backgroundColor:"#ffffff"}} onClick={handleDeleteSelected} size="sm" variant="destructive">
                <Trash className="w-4 h-4 mr-1" />
                Delete
              </Button>
            </div>
          </div>
        )}

        <div className="border rounded-lg overflow-x-auto">
          <Table className="min-w-[700px]">
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox
                    checked={selectedLogs.length === paginatedLogs.length}
                    onCheckedChange={(checked) =>
                      setSelectedLogs(checked ? paginatedLogs.map(l => l.id) : [])
                    }
                  />
                </TableHead>
                {['timestamp', 'userName', 'roleName', 'action', 'performedBy'].map(field => (
                  <TableHead
                    key={field}
                    className="cursor-pointer"
                    onClick={() => toggleSort(field as keyof UserLog)}
                  >
                    <div className="flex items-center gap-2 capitalize">
                      {field.replace(/([A-Z])/g, ' $1')}
                      {getSortIcon(field as keyof UserLog)}
                    </div>
                  </TableHead>
                ))}
                <TableHead className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button style={{backgroundColor:"#ffffff"}} variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={exportToCSV}>
                        <FileSpreadsheet className="w-4 h-4 mr-2" />
                        Export CSV
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={exportToPDF}>
                        <FileDown className="w-4 h-4 mr-2" />
                        Export PDF
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedLogs.map(log => (
                <TableRow key={log.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedLogs.includes(log.id)}
                      onCheckedChange={(checked) =>
                        setSelectedLogs(prev => checked ? [...prev, log.id] : prev.filter(id => id !== log.id))
                      }
                    />
                  </TableCell>
                  <TableCell>{log.timestamp}</TableCell>
                  <TableCell>{log.userName}</TableCell>
                  <TableCell>{log.roleName}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell>{log.performedBy}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button style={{backgroundColor:"#ffffff"}} variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <div className="text-sm text-muted-foreground">
            Showing {Math.min(filteredLogs.length, (currentPage - 1) * itemsPerPage + 1)}–
            {Math.min(currentPage * itemsPerPage, filteredLogs.length)} of {filteredLogs.length}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Button style={{backgroundColor:"#ffffff"}} size="sm" variant="outline" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
              <ChevronsLeft className="w-4 h-4" />
            </Button>
            <Button style={{backgroundColor:"#ffffff"}} size="sm" variant="outline" onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} disabled={currentPage === 1}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-sm">{currentPage} / {totalPages}</span>
            <Button style={{backgroundColor:"#ffffff"}} size="sm" variant="outline" onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} disabled={currentPage === totalPages}>
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button style={{backgroundColor:"#ffffff"}} size="sm" variant="outline" onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
              <ChevronsRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

