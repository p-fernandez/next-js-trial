import { NextResponse } from 'next/server';

const createErrorResponse = (status, message) => {
  return NextResponse.json({ success: false, message }, { status });
};

export const createBadRequestErrorResponse = (message) => {
  return createErrorResponse(400, message);
};

export const createInternalServerErrorResponse = (message) => {
  return createErrorResponse(500, message);
};

export const createOkResponse = (payload) => {
  return NextResponse.json({ ...payload, success: true });
};
