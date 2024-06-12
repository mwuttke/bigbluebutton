import { RedisMessage } from '../types';
import {throwErrorIfInvalidInput, throwErrorIfNotPresenter} from "../imports/validation";

export default function buildRedisMessage(sessionVariables: Record<string, unknown>, input: Record<string, unknown>): RedisMessage {
  throwErrorIfNotPresenter(sessionVariables);
  throwErrorIfInvalidInput(input,
      [
        {name: 'presentationId', type: 'string', required: true},
        {name: 'fileStateType', type: 'string', required: true},
      ]
  )

  const eventName = `MakePresentationDownloadReqMsg`;

  const routing = {
    meetingId: sessionVariables['x-hasura-meetingid'] as String,
    userId: sessionVariables['x-hasura-userid'] as String
  };

  const header = {
    name: eventName,
    meetingId: routing.meetingId,
    userId: routing.userId
  };

  const body = {
    presId: input.presentationId,
    allPages: true,
    fileStateType: input.fileStateType,
    pages: [],
  };

  return { eventName, routing, header, body };
}