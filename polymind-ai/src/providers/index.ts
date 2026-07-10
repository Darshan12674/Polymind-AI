import { MODELS } from "@/config/models";
import { ProviderFactory } from "@/factories/provider-factory";

export const providers = MODELS
  .filter(model => model.enabled)
  .map(ProviderFactory.create)