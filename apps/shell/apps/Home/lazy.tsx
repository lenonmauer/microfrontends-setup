import dynamic from 'next/dynamic'

import { Loader } from '@app/components/Loader'

export const HomeApp = dynamic(() => import('./'), {
  ssr: false,
  loading: Loader,
})
