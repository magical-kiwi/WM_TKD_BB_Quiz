import { Quiz } from '../quiz_common.js';

const quizData = [
    { question: "Kap Kwon",                   a:"Hand techniques",                          b:"Middle part",                   c:"Back fist",               correct:"c"}, // 1
    { question: "Jang Kwon",                  a:"High punch",                               b:"Side defence",                  c:"Heel of Palm",            correct:"c"}, // 2
    { question: "Soo Do",                     a:"Knife Hand",                               b:"Humility",                      c:"Philtrum",                correct:"a"}, // 3
    { question: "Yuk Soo Do",                 a:"Relax or rest",                            b:"Ridge hand",                    c:"Thank you",               correct:"b"}, // 4
    { question: "Kwan Soo",                   a:"Meditation",                               b:"National flag",                 c:"Spear hand",              correct:"c"}, // 5
    { question: "Soo Ki",                     a:"Axe Kick",                                 b:"Training hall or studio",       c:"Testing (Gup and Dan)",   correct:"c"}, // 6
    { question: "Jok Ki",                     a:"Kick",                                     b:"Uniform/Suit",                  c:"Sit",                     correct:"b"}, // 7
    { question: "Cha Ki",                     a:"National flag",                            b:"Belt",                          c:"Training hall or studio", correct:"c"}, // 8
    { question: "Ha Dan",                     a:"Low part",                                 b:"Instructor",                    c:"Uniform/suit",            correct:"a"}, // 9
    { question: "Choong Dan",                 a:"Middle part",                              b:"World Tang Soo Do Association", c:"National flag",           correct:"a"}, // 10
    { question: "Sang Dan",                   a:"High part",                                b:"Grandmaster",                   c:"Instructor",              correct:"a"}, // 11
    { question: "Ahp",                        a:"Front",                                    b:"Testing (Gup and Dan)",         c:"Self defence",            correct:"a"}, // 12
    { question: "Yup",                        a:"Hand",                                     b:"Junior member",                 c:"Examiner",                correct:"c"}, // 13
    { question: "Dwi",                        a:"Hi part",                                  b:"Concentration",                 c:"National flag",           correct:"c"}, // 14
    { question: "Ha Dan Mahk Ki",             a:"In to out block",                          b:"Turn to the rear",              c:"Association flag",        correct:"b"}, // 15
    { question: "Choon Dan Kong Kyuck",       a:"Mid section punch",                        b:"High 2 hand X block",           c:"Foot techniques",         correct:"a"}, // 16
    { question: "Sang Dan Kong Kyuck",        a:"High block, fighting stance",              b:"Breaking",                      c:"Hand techniques",         correct:"b"}, // 17
    { question: "Sang Dan Mahk Ki",           a:"Fighting stance",                          b:"Form/Pattern",                  c:"Integrity",               correct:"b"}, // 18
    { question: "Ahneso Phakuro Mahk Ki",     a:"Punching exercise in Horse riding stance", b:"Warm up exercise",              c:"Self Control",            correct:"c"}, // 19
    { question: "Phakeso Ahnuro Mahk Ki",     a:"Crescent kick (in to out)",                b:"Self defence",                  c:"Breaking",                correct:"b"}, // 20
    { question: "Choon Dan Hang Jin",         a:"Side Punch",                               b:"Kick",                          c:"Breaking",                correct:"a"}, // 21
    { question: "Chun Kul Ssang Soo Mahk Ki", a:"Front stretch kick",                       b:"Self defence",                  c:"Association flag",        correct:"b"}, // 22
    { question: "Hu Kul Ssang Soo Mahk Ki",   a:"Round house kick",                         b:"Begin",                         c:"Dan holder",              correct:"c"}, // 23
    { question: "Hu Kul Sang Dan Mahk Ki",    a:"Ready stance",                             b:"Gup holder",                    c:"master",                  correct:"c"}, // 24
    { question: "Ssang Soo Sang Dan Mahk Ki", a:"Without the count",                        b:"Beginner",                      c:"Energy",                  correct:"b"}  // 25
];

let quiz = new Quiz(document,'Red Belt Terminology Quiz', quizData);