import { handleError } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";

export const addCampaign = async (campaignName: string) => {
    try {
        return { errorMessage: null };
    } catch (error) {
        return handleError(error);
    }
};
export const updateCampaign = async (campaignName: string) => {
    try {
        return { errorMessage: null };
    } catch (error) {
        return handleError(error);
    }
};

