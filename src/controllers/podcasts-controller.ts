import {IncomingMessage, ServerResponse} from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/http-status-code';
import { ContentType } from '../utils/content-type';
import { FilterPodcastModel } from '../models/filter-podcast-model';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content: FilterPodcastModel = await serviceListEpisodes();

  res.writeHead(content.statusCode, {'Content-Type': ContentType.JSON});
  res.end(JSON.stringify(content.body));
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  const content: FilterPodcastModel = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, {"Content-Type": ContentType.JSON});
  res.end(JSON.stringify(content.body));
}