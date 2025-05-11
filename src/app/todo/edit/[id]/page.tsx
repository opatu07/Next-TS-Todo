import { TodoEditTemplate } from "@/components/templates";

type TodoEditPageProps = {
    params: Promise<{ id: string }>;
}

export default async function TodoEditPage({ params }: TodoEditPageProps) {
    const { id } = await params;
    return <TodoEditTemplate id={id} />;
}
