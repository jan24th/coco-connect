import 'server-only'
import { serverContext } from '@/utils-server'

export const [getSlug, setSlug] = serverContext('')
