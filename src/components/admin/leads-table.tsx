"use client";

import type { WithId, Document } from "mongodb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

interface LeadsTableProps {
  leads: WithId<Document>[];
}

export function LeadsTable({ leads }: LeadsTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Contact (WhatsApp)</TableHead>
            <TableHead>Sells</TableHead>
            <TableHead>Daily Orders</TableHead>
            <TableHead>Tracking Method</TableHead>
            <TableHead>Price Comfort</TableHead>
            <TableHead className="text-right">Submitted At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead._id.toString()}>
              <TableCell className="font-medium">{lead.contact || 'N/A'}</TableCell>
              <TableCell className="text-muted-foreground">{lead.productType || 'N/A'}</TableCell>
              <TableCell className="text-muted-foreground">{lead.dailyOrders || 'N/A'}</TableCell>
              <TableCell className="text-muted-foreground">{lead.trackingMethod || 'N/A'}</TableCell>
              <TableCell className="text-muted-foreground">{lead.priceComfort || 'N/A'}</TableCell>
              <TableCell className="text-right text-muted-foreground">
                {format(new Date(lead.submittedAt), "PPP p")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
