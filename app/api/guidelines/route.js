import { v4 as uuid } from 'uuid';

import {
  createBadRequestErrorResponse,
  createInternalServerErrorResponse,
  createOkResponse,
} from '@/_api/responses';
import predict from '@/_server-utils/predict';

export async function POST(request) {
  const body = await request.json();
  const guidelines = body.guidelines;

  if (!guidelines) {
    return createBadRequestErrorResponse(
      'Guidelines have not been submitted. Either you have not submitted guidelines or the submission has failed'
    );
  }

  const luck = Math.floor(Math.random() * 3);

  if (luck < 1) {
    return createInternalServerErrorResponse(
      'This is a random simulated error to test unhappy paths in the guidelines upload'
    );
  }

  const prediction = await predict({ guidelinesText: guidelines });

  return createOkResponse({ id: uuid(), prediction });
}
