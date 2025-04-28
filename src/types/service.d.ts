interface ServiceError<T = unknown> {
  statusCode: number
  message: string
  timestamp: string
  path: string
  data?: T
}

declare namespace Service {
  type Error = ServiceError
}
