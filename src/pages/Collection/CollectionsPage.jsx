import CollectionsHero from '../../components/collections/CollectionHero/CollectionsHero'
import CollectionCards from '../../components/collections/CollectionCard/CollectionsCards'

export default function CollectionsPage() {
  return (
    <main className="relative w-full">
      <CollectionsHero />
      <CollectionCards />
    </main>
  )
}