export default async function getBlogsDetails() {
    try {
        let response = await fetch('https://oasisindia.in/wp-json/wp/v2/posts?_fields=yoast_head_json&per_page=6', { next: { revalidate: 36000 } })
        if (response && response.ok) {
            return await response.json();
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}