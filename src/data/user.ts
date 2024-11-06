import { User } from "@/types/user";

export const user: User = {
    slug: "johntest",
    name: "John.exe ",
    avatar: "https://ui-avatars.com/api/?background=random&name=John&size=100",
    cover: "https://img.freepik.com/fotos-gratis/conceito-de-viagem-completo-com-pontos-de-referencia_23-2149153258.jpg",
    bio: "Desenvolvedor sênior há mais de 14 anos",
    link: "https://google.com.br",
    postCount: 127,
};

export const otherUsers: User[] = [
    {
        slug: "mariasmith",
        name: "Maria Smith",
        avatar: "https://ui-avatars.com/api/?background=random&name=Maria&size=100",
        cover: "https://img.freepik.com/fotos-gratis/arranha-ceus-modernos-no-centro-da-cidade_23-2149153258.jpg",
        bio: "Especialista em UX/UI com paixão por design acessível",
        link: "https://google.com.br",
        postCount: 87,
    },
    {
        slug: "jestertester",
        name: "Jester Tester",
        avatar: "https://ui-avatars.com/api/?background=random&name=Bruno&size=100",
        cover: "https://img.freepik.com/fotos-gratis/montanhas-nevadas-no-horizonte_23-2149153258.jpg",
        bio: "Engenheiro de software com foco em sistemas escaláveis",
        link: "https://google.com.br",
        postCount: 112,
    },
];
