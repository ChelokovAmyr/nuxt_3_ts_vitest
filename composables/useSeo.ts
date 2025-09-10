import { useHead } from '#app'

export function useSeo(title: string, description: string) {
  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  })
}
