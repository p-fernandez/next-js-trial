import { v4 as uuid } from 'uuid';

import {
  createBadRequestErrorResponse,
  createInternalServerErrorResponse,
  createOkResponse,
} from '@/_api/responses';
import predict from '@/_server-utils/predict';

export async function POST(request) {
  const body = await request.json();
  const guidelinesText = body.guidelinesText;
  if (!guidelinesText) {
    return createBadRequestErrorResponse(
      'Please remember to provide the guidelines to generate a prediction'
    );
  }

  const prediction = await predict({ guidelinesText });

  if (!prediction) {
    return createInternalServerErrorResponse(
      'We have not being able to generate a prediction. Please try again.'
    );
  }

  return createOkResponse({ id: uuid(), prediction });
}
