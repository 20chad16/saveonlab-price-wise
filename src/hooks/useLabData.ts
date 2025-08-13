
import { useState, useEffect } from 'react';
import { labDataService, type LabDataResponse } from '@/services/labDataService';
import { useToast } from '@/hooks/use-toast';

export const useLabData = () => {
  const [data, setData] = useState<LabDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const labData = await labDataService.getLabData();
        setData(labData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load lab data';
        setError(errorMessage);
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [toast]);

  const refreshData = async () => {
    labDataService.clearCache();
    const loadData = async () => {
      try {
        setLoading(true);
        const labData = await labDataService.getLabData();
        setData(labData);
        toast({
          title: "Success",
          description: "Lab data refreshed successfully",
        });
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to refresh lab data';
        setError(errorMessage);
        toast({
          title: "Error",
          description: errorMessage,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    await loadData();
  };

  return {
    data,
    loading,
    error,
    refreshData
  };
};
