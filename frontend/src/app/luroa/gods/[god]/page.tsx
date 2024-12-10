import { Text } from '@/src/components/atoms/generic/Text';
import { Divider } from '@/src/components/atoms/generic/Divider';
import { runQuery } from '@/src/configs/sanityConfig';
import { specificGodQuery } from '@/src/groqd/queries/products/gods';
import { MappedPortableText } from '@/src/components/atoms/generic/MappedPortableText';
import { SidebarPageLayout } from '@/src/components/templates/SidebarPageLayout';

export const revalidate = 1000;

export default async function God({ params }: { params: { god: string } }) {
    if (!params.god) return <div>Loading...</div>;
    const god = await runQuery(specificGodQuery(params.god), ['god'], { god: params.god });
    if (!god) return <div>Loading data...</div>;

    return (
        <SidebarPageLayout defaultAttributes={god.defaultAttributes} information={god.information}>
            <Text size="xl">{god.defaultAttributes?.name}</Text>
            {god.appearance && <MappedPortableText value={god.appearance} />}

            <Divider />
            <Text className="pl-36 underline">
                The below is temporarily added to fill out the page for testing purposes
            </Text>
            <Divider />

            <section>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur cum eius enim esse
                    exercitationem, facilis hic illo nobis possimus repellendus sit tempora ut vero, voluptas. Ducimus
                    illum minus molestias?
                </Text>
                <Text>
                    Atque beatae corporis, culpa cum, deserunt dicta expedita illo obcaecati qui saepe, sit tempore
                    totam vero voluptas voluptate. Alias ducimus magnam minima optio quos rerum. Alias corporis id rem
                    ullam!
                </Text>
                <Text>
                    Blanditiis, deserunt dolor, illo illum inventore iste iure libero, minima molestias nam ratione sunt
                    unde vel. Alias aspernatur distinctio ducimus eos eum eveniet iure, laborum repellat sapiente
                    voluptatibus! Ea, officia?
                </Text>
                <Text>
                    Accusamus blanditiis consequuntur debitis dolore doloribus et eum eveniet, harum illum itaque iure
                    maiores molestiae neque nobis nostrum quam quasi qui quidem quos ratione reiciendis reprehenderit
                    soluta totam, velit vitae?
                </Text>
                <Text>
                    Autem doloremque inventore nam non numquam! A atque commodi consequuntur cum deleniti dignissimos
                    dolores eum facilis hic laboriosam laudantium maxime modi mollitia nobis obcaecati placeat possimus,
                    quibusdam reiciendis sed ut.
                </Text>
                <Text>
                    Accusamus aperiam architecto aspernatur autem eaque eos eveniet facere illo illum laboriosam
                    laudantium maiores minus molestiae necessitatibus nesciunt obcaecati placeat, possimus quae quod
                    reprehenderit, suscipit temporibus voluptate. Aliquid, aperiam sint.
                </Text>
                <Text>
                    Asperiores aut cupiditate enim est fuga hic, iste laboriosam minus modi natus nesciunt non quae quam
                    quisquam quos recusandae tempore! Accusamus earum natus, nesciunt numquam quaerat quas quasi quos
                    vero.
                </Text>
                <Text>
                    A amet aspernatur doloremque dolores explicabo facere laborum quia quo quos, saepe sint soluta
                    ullam! Aut dignissimos impedit nesciunt pariatur voluptates? Architecto doloribus ea expedita
                    explicabo hic iste quaerat ratione.
                </Text>
                <Text>
                    Ab accusamus, at aut cumque dolore doloremque et fugiat iure labore, maxime minus modi nihil nisi
                    numquam praesentium quam quas quia quos sit veniam voluptas voluptatem voluptates voluptatibus.
                    Beatae, dignissimos.
                </Text>
                <Text>
                    Ab eum inventore porro velit veniam! Debitis dicta error repudiandae saepe sunt suscipit voluptas?
                    Dolorum facere illo reiciendis unde ut velit veritatis voluptatibus! Commodi fugit nihil pariatur
                    quae rem, sequi!
                </Text>
                <Text>
                    Ad aliquam aliquid consequatur culpa, delectus dicta dolore ducimus error iusto natus, odio officia
                    quaerat quidem quos reiciendis ullam voluptas? Aspernatur consequatur minus natus neque sit soluta
                    tempore, velit voluptatem!
                </Text>
                <Text>
                    Consequuntur est ex voluptates! Aliquid at est, facilis nihil porro quam quisquam totam voluptatem!
                    Autem doloremque est exercitationem illum, natus possimus reiciendis sequi veritatis? Aliquam
                    asperiores aspernatur at eveniet natus!
                </Text>
                <Text>
                    Aliquid atque distinctio dolor minima odit pariatur praesentium quas recusandae totam voluptate!
                    Enim odio odit quas quos reiciendis, similique ut veniam. Aspernatur consequuntur, eum molestiae
                    nihil placeat porro sit voluptatum.
                </Text>
                <Text>
                    A commodi, debitis deleniti dicta dolorem doloribus eius enim ipsum itaque labore maxime
                    perspiciatis porro similique totam vero? Architecto dicta ipsum minima necessitatibus numquam
                    possimus quae quidem, quod repudiandae voluptatibus.
                </Text>
                <Text>
                    Delectus dolore ducimus facere mollitia nesciunt nobis nostrum, obcaecati officiis omnis ratione,
                    soluta, tempora voluptates. Ab aliquam blanditiis error fugiat laboriosam, molestiae nobis quos.
                    Alias inventore magni quam rerum voluptatibus!
                </Text>
                <Text>
                    Ab alias at aut culpa dolore dolorum in, inventore ipsa, labore optio qui suscipit tempora, totam
                    ullam vel voluptates voluptatum? Corporis cupiditate doloribus ipsum, minus necessitatibus
                    perspiciatis porro quia repudiandae.
                </Text>
                <Text>
                    Accusamus laboriosam mollitia quos tempora voluptatibus? Ad architecto autem debitis dolore ducimus
                    enim et, itaque labore laborum minima modi nam quas qui quibusdam quos tenetur voluptatum?
                    Architecto ea molestiae velit.
                </Text>
                <Text>
                    Laudantium quos reiciendis repellat sapiente totam. Alias corporis inventore laudantium molestiae
                    placeat vero, voluptatum. Animi at cum dolores dolorum eveniet exercitationem explicabo facere
                    mollitia nihil quae quos, sequi ut voluptate.
                </Text>
                <Text>
                    A amet aperiam architecto consequuntur deleniti illum inventore iste modi mollitia officiis, quaerat
                    quod quos similique! Accusantium, aliquam deserunt earum et fuga fugiat fugit necessitatibus nemo
                    nobis omnis perferendis quo.
                </Text>
                <Text>
                    Accusantium at atque autem consequatur ea earum impedit minus nemo nostrum omnis! Atque beatae
                    blanditiis consequuntur distinctio ex excepturi, exercitationem maxime molestiae perferendis placeat
                    qui quia quidem quos, ullam veritatis!
                </Text>
            </section>
        </SidebarPageLayout>
    );
}
