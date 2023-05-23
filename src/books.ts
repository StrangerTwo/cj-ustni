import { Book } from "../model/book.js";
import { Period } from "../model/period.js";
import Question from "./question.js";

type Books = {
    [key in Question]: Partial<Book>;
};

const books = {
    [Question._01_ROMEO_A_JULIE]: {
        name: "Romeo a Julie",
        author: "William Shakespeare",
        period: Period.RENESANCE
    },
    [Question._02_LAKOMEC]: {
        name: "Lakomec",
        author: "Moliére",
        period: Period.KLASICISMUS
    },
    [Question._03_SLUHA_DVOU_PANU]: {
        name: "Sluha dvou pánů",
        author: "Carlo Goldoni",
    },
    [Question._04_GULLIVEROVY_CESTY]: {
        name: "Gulliverovy cesty",
        author: "Jonathan Swift",
    },
    [Question._05_OBRAZ_DORIANA_GRAYE]: {
        name: "Obraz Doriana Graye",
        author: "Oscar Wilde",
    },
    [Question._06_MAJ]: {
        name: "Máj",
        author: "Karel Hynek Mácha"
    },
    [Question._07_POVIDKY_MALOSTRANSKE]: {
        name: "Povídky malostranské",
        author: "Jan Neruda",
    },
    [Question._08_PISNE_KOSMICKE]: {
        name: "Písně kosmické",
        author: "Jan Neruda",
    },
    [Question._09_PETR_A_LUCIE]: {
        name: "Petr a Lucie",
        author: "Romain Rolland",
    },
    [Question._10_VELKY_GATSBY]: {
        name: "Velký Gatsby",
        author: "Fitzgerald Francis Scott",
    },
    [Question._11_SBOHEM]: {
        name: "Sbohem, armádo",
        author: "Ernest Hemingway"
    },
    [Question._12_STAREC_A_MORE]: {
        name: "Stařec a moře",
        author: "Ernest Hemingway",
    },
    [Question._13_HOBIT]: {
        name: "Hobit",
        author: "Ronal Reuel Tolkien"
    },
    [Question._14_1984]: {
        name: "1984",
        author: "George Orwell"
    },
    [Question._15_MUZI]: {
        name: "Muži, kteří nenávidí ženy",
        author: "Stieg Larsson",
    },
    [Question._16_PROMENA]: {
        name: "Proměna",
        author: "Franz Kafka"
    },
    [Question._17_OSUDY_DOBREHO_VOJAKA_SVEJKA_ZA_SVETOVE]: {
        name: "Osudy dobrého vojáka Švejka za světové války (1. díl: V zázemí)",
        author: "Jaroslav Hašek",
    },
    [Question._18_RUR]: {
        name: "R.U.R.",
        author: "Karel Čapek"
    },
    [Question._19_SATURNIN]: {
        name: "Saturnin",
        author: "Zdeněk Jirotka"
    },
    [Question._20_OSTRE_SLEDOVANE_VLAKY]: {
        name: "Ostře sledované vlaky",
        author: "Bohumil Hrabal",
    },
};

export default books;
