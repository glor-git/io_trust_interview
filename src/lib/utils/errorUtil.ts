import { AxiosError, isAxiosError } from 'axios'

export function errorHandler(error: unknown) {
  if (isAxiosError<Service.Error>(error)) {
    const axiosError = error as AxiosError<Service.Error>

    if (axiosError.response?.data) {
      throw axiosError.response.data
    }

    throw {
      statusCode: axiosError.response?.status ?? 500,
      message: axiosError.message,
      timestamp: new Date().toISOString(),
      path: axiosError.config?.url ?? '',
    } satisfies Service.Error
  }

  throw {
    statusCode: 500,
    message: (error as Error).message ?? 'Unknown error',
    timestamp: new Date().toISOString(),
    path: '',
  } satisfies Service.Error
}

export function errorHandlerWithToast(error: unknown) {
  if (isAxiosError<Service.Error>(error)) {
    // toast.error(error.response?.data.message)
  }
  // toast.error((error as Error).message ?? 'Unknown error')
  throw errorHandler(error)
}
