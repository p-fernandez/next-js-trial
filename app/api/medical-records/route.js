import { v4 as uuid } from 'uuid';

import {
  createBadRequestErrorResponse,
  createInternalServerErrorResponse,
  createOkResponse,
} from '@/_api/responses';

export async function POST(request) {
  const data = await request.formData();
  const file = data.get('file');

  if (!file) {
    return createBadRequestErrorResponse(
      'File has not been submitted. Either you have not submitted a file or the submission has failed'
    );
  }

  const luck = Math.floor(Math.random() * 3);

  if (luck < 1) {
    return createInternalServerErrorResponse(
      'This is a random simulated error to test unhappy paths in the medical record upload'
    );
  }

  return createOkResponse({ id: uuid(), fileName: file.name });
}
