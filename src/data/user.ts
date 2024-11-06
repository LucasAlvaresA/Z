import { User } from "@/types/user";

export const user: User = {
    slug: "johntest",
    name: "John.exe ",
    avatar: "/user1.jpg",
    cover: "tweetImg1.png",
    bio: "Desenvolvedor sênior há mais de 14 anos",
    link: "https://google.com.br",
    postCount: 2,
};

export const otherUsers: User[] = [
    {
        slug: "mariasmith",
        name: "Maria Smith",
        avatar: "/user3.jpg",
        cover: "https://img.freepik.com/fotos-gratis/arranha-ceus-modernos-no-centro-da-cidade_23-2149153258.jpg",
        bio: "Especialista em UX/UI com paixão por design acessível",
        link: "https://google.com.br",
        postCount: 87,
    },
    {
        slug: "jestertester",
        name: "Jester Tester",
        avatar: "/user2.jpg",
        cover: "https://img.freepik.com/fotos-gratis/montanhas-nevadas-no-horizonte_23-2149153258.jpg",
        bio: "Engenheiro de software com foco em sistemas escaláveis",
        link: "https://google.com.br",
        postCount: 112,
    },
];
