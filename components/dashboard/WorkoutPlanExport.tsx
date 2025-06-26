
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const WorkoutPlanExport: React.FC = () => {
  const exportToPDF = async () => {
    try {
      const element = document.getElementById('workout-plan');
      if (!element) return;
      
      toast.success("Gerando PDF, aguarde...");
      
      const canvas = await html2canvas(element, {
        scale: 2,
        logging: false,
        useCORS: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`plano-treino-glowslim-${new Date().toISOString().slice(0,10)}.pdf`);
      
      toast.success("PDF gerado com sucesso!");
    } catch (error) {
      console.error("Erro ao exportar para PDF:", error);
      toast.error("Erro ao gerar PDF. Tente novamente.");
    }
  };

  return (
    <Button onClick={exportToPDF}>
      <Download className="mr-2 h-4 w-4" />
      Baixar PDF
    </Button>
  );
};

export default WorkoutPlanExport;
