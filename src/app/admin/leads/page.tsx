import { getLeads } from "@/app/actions";
import { LeadsTable } from "@/components/admin/leads-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { logOut } from "@/app/actions";
import { Button } from "@/components/ui/button";

export default async function LeadsPage() {
  const { leads, error } = await getLeads();

  return (
    <div className="min-h-screen bg-secondary p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Waitlist Leads</h1>
            <p className="text-muted-foreground">Here are all the users who signed up for early access.</p>
          </div>
          <form action={logOut}>
            <Button type="submit" variant="outline">Log Out</Button>
          </form>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Submissions</CardTitle>
            <CardDescription>
              A total of {leads?.length || 0} users have joined the waitlist.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && <p className="text-destructive">{error}</p>}
            {leads && <LeadsTable leads={leads} />}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
