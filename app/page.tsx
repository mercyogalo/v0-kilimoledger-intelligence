import { Sidebar } from '@/components/layout/Sidebar';
import { MainContent } from '@/components/layout/MainContent';
import { GlobalExportLedger } from '@/components/column1/GlobalExportLedger';
import { LiveRiskDossier } from '@/components/column2/LiveRiskDossier';
import { DriverOperations } from '@/components/column3/DriverOperations';

export default function Page() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Sidebar />
      <MainContent>
        <div className="lg:col-span-1">
          <GlobalExportLedger />
        </div>
        <div className="lg:col-span-1">
          <LiveRiskDossier />
        </div>
        <div className="lg:col-span-1">
          <DriverOperations />
        </div>
      </MainContent>
    </div>
  );
}
