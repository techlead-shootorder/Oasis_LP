import React from 'react';

export interface SchemaDataProps {
    schema?: {
        [key: string]: any
    },
    keyValue?: string,
    videosList?: any[];
    faqList?: any[];
    mainRoutePathName?: string;
    nestedRoutePathName?: string;
    mainRouteTitle?: string;
    nestedRouteTitle?: string;
    nestedRoutePathName2?: string;
    nestedRouteTitle2?: string;
    businnessInfoSchema?: any;
    personSchema?: any;
}

const StructuredSchemaData: React.FC<SchemaDataProps> = (props: SchemaDataProps) => {
    const schemas = [];

    // BreadcrumbList Schema
    if (props.mainRoutePathName) {
        const breadCrumbSchema: any = {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Homepage",
                    "item": "https://oasisindia.in/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": props.mainRouteTitle,
                    "item": `https://oasisindia.in/${props.mainRoutePathName}/`
                }
            ]
        };

        if (props.nestedRoutePathName && props.nestedRouteTitle) {
            breadCrumbSchema.itemListElement.push({
                "@type": "ListItem",
                "position": 3,
                "name": props.nestedRouteTitle,
                "item": `https://oasisindia.in/${props.nestedRoutePathName}/`
            });
        }

        if (props.nestedRoutePathName2 && props.nestedRouteTitle2) {
            breadCrumbSchema.itemListElement.push({
                "@type": "ListItem",
                "position": 4,
                "name": props.nestedRouteTitle2,
                "item": `https://oasisindia.in/${props.nestedRoutePathName2}/`
            });
        }

        schemas.push(breadCrumbSchema);
    }

    // VideoObject Schema
    if (props.videosList && props.videosList.length > 0) {
        props.videosList.forEach((video: any) => {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "VideoObject",
                "name": video.videoTitle,
                "description": video.schemaDesc,
                "thumbnailUrl": video.thumbnailUrl,
                "uploadDate": video.uploadDate,
                "duration": video.duration
            });
        });
    }

    // FAQPage Schema
    if (props.faqList && props.faqList.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": props.faqList.map((faq: any) => ({
                "@type": "Question",
                "name": faq.title,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.content
                }
            }))
        });
    }

    // Add other schemas
    if (props.businnessInfoSchema) schemas.push(props.businnessInfoSchema);
    if (props.personSchema) schemas.push(props.personSchema);

    return (
        <>
            {schemas.map((schema, index) => (
                <script 
                    key={`${props.keyValue}-${index}`} 
                    type="application/ld+json" 
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
                />
            ))}
        </>
    );
}

export default StructuredSchemaData;