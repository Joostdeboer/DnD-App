import { runQuery } from '@/src/configs/sanityConfig';
import { GenericProductPage } from '@/src/components/templates/GenericProductPage';
import { specificCityQuery } from '@/src/groqd/queries/products/cities';

export default async function City({ params }: { params: Promise<{ city: string }> }) {
    const { city: cityParam } = await params;
    if (!cityParam) return <div>Loading...</div>;
    const city = await runQuery(specificCityQuery(cityParam), ['city'], { city: cityParam });

    return <GenericProductPage product={city} />;
}
