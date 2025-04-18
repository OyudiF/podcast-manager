import { repoPodcast } from "../repositories/podcasts-repository"
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/http-status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {

  // Definir interface de retorno
  let responseFormat: FilterPodcastModel =  {
    statusCode: 0,
    body: [],
  }

  // Busca de dados
  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repoPodcast(queryString);

  // Verifica se tem conteudo
  responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  responseFormat.body = data;

  return responseFormat;
}