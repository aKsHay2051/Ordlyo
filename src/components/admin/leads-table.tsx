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
import { Badge } from "@/components/ui/badge";
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
            <TableHead>Contact</TableHead>
            <TableHead>Feedback</TableHead>
            <TableHead className="text-right">Submitted At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead._id.toString()}>
              <TableCell className="font-medium">{lead.contact}</TableCell>
              <TableCell className="text-muted-foreground max-w-sm truncate">
                {lead.feedback || "N/A"}
              </TableCell>
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
