export const site = {
  name: "Empower Your Style",
  url: "https://www.empoweryourstyle.nz",
  phone: "+64 27 705 7811",
  email: "hello@empoweryourstyle.nz",
  location: "Auckland, New Zealand",
  instagram: "https://www.instagram.com/empower_your_style/",
  facebook: "https://www.facebook.com/empoweryourstyle/",
  pinterest: "https://nz.pinterest.com/emiliastoklasko/",
  linkedin: "https://www.linkedin.com/in/emilia-stoklaskova/"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Emilia", href: "/about-emilia" },
  { label: "Services", href: "/services" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Resources", href: "/resources" },
  { label: "Style Quiz", href: "/style-quiz" },
  { label: "Contact", href: "/contact" }
];

export const services = [
  {
    title: "Personal Colour Analysis",
    href: "/services#colour-analysis",
    image: "/images/Personalised.jpg",
    summary:
      "Discover the colours that brighten your complexion, simplify shopping and make everyday outfits feel instantly more polished.",
    detail:
      "A practical, uplifting session for women who want clarity around their best neutrals, accents, makeup shades and wardrobe direction."
  },
  {
    title: "Wardrobe Refresh",
    href: "/services#wardrobe-refresh",
    image: "/images/Wardrobe.png",
    summary:
      "Edit what you own, uncover new outfit combinations and build a wardrobe that works beautifully for real life.",
    detail:
      "Ideal when your wardrobe feels full but not useful, your body or lifestyle has changed, or you want a fresh start without waste."
  },
  {
    title: "Personal Shopping",
    href: "/services#personal-shopping",
    image: "/images/personal-shopping.jpg",
    summary:
      "Shop with a clear plan, expert guidance and a calm eye for fit, colour, quality and versatility.",
    detail:
      "Perfect for seasonal updates, events, workwear, travel capsules or rebuilding confidence after years of buying pieces that do not quite land."
  },
  {
    title: "Style Confidence Session",
    href: "/services#style-confidence",
    image: "/images/virtual.jpg",
    summary:
      "A focused online or in-person session to refine your personal style and make dressing feel easier.",
    detail:
      "Bring your questions, outfit dilemmas or upcoming shopping decisions and leave with clear next steps tailored to you."
  }
];

export const testimonials = [
  {
    quote:
      "Emilia made style feel simple and personal. I finally understand what suits me and shopping no longer feels overwhelming.",
    name: "Sarah",
    detail: "Colour analysis and wardrobe refresh"
  },
  {
    quote:
      "The session was warm, practical and confidence building. I left with outfits I would never have put together on my own.",
    name: "Michelle",
    detail: "Wardrobe consultation"
  },
  {
    quote:
      "I used to buy the same safe pieces. Now I know what to look for and feel polished without trying too hard.",
    name: "Anna",
    detail: "Personal shopping"
  }
];

export const successStories = [
  {
    name: "Claire",
    service: "Personal Colour Analysis",
    headline: "From washed out neutrals to a palette that made her glow",
    before:
      "Claire relied on black, grey and cool beige because they felt safe, but she often felt tired in photos and unsure why certain outfits looked flat.",
    after:
      "Her session revealed softer warm tones, richer neutrals and makeup shades that brought brightness back to her face. She left with a palette she could use for workwear, casual outfits and lipstick choices.",
    result:
      "Shopping became faster because she knew which colours deserved a yes, a maybe or a no before entering the fitting room.",
    replaceWith:
      "Replace with a real client palette photo, natural-light before/after image and one short quote about how colour clarity changed shopping."
  },
  {
    name: "Megan",
    service: "Wardrobe Refresh",
    headline: "From a full wardrobe with nothing to wear to 18 ready outfits",
    before:
      "Megan had plenty of clothes but very few complete outfits. Her wardrobe mixed old corporate pieces, weekend basics and impulse buys that did not work together.",
    after:
      "The refresh identified her best pieces, removed visual clutter and created outfit formulas for client meetings, school runs, weekends and dinners out.",
    result:
      "She discovered useful combinations she already owned and left with a focused shopping list instead of feeling she needed to start again.",
    replaceWith:
      "Replace with rail photos, outfit flat lays, a before wardrobe shot and a note showing how many outfits were created."
  },
  {
    name: "Anika",
    service: "Personal Shopping",
    headline: "From stressful shopping trips to a polished seasonal capsule",
    before:
      "Anika needed clothes for a new role but felt overwhelmed by choice, sizing and whether pieces were worth the investment.",
    after:
      "With a clear brief, the shopping session focused on versatile separates, flattering proportions and colours that worked with her existing wardrobe.",
    result:
      "She came away with a compact capsule for work and weekends, plus the confidence to recognise what suited her on future shopping trips.",
    replaceWith:
      "Replace with approved change-room photos, capsule item shots and a quote about feeling prepared for the new role."
  }
];

export const styleQuiz = {
  results: {
    polishedMinimalist: {
      title: "The Polished Minimalist",
      summary:
        "You are drawn to clean lines, elevated basics and pieces that feel calm, useful and quietly refined.",
      struggle:
        "Your wardrobe can become too plain or repetitive when everything is practical but nothing feels special.",
      tips: [
        "Invest in beautiful fabrics, strong fit and simple pieces with one refined detail.",
        "Use texture, jewellery, shoes and bags to add interest without visual clutter.",
        "Build a tight colour palette so every new piece works hard."
      ],
      service: "Wardrobe Refresh",
      cta:
        "A wardrobe refresh can help you refine your essentials and create simple outfits that still feel polished."
    },
    softRomantic: {
      title: "The Soft Romantic",
      summary:
        "You feel best in feminine details, soft colour, gentle texture and outfits with warmth and ease.",
      struggle:
        "It can be hard to keep your look modern and practical without losing the softness you love.",
      tips: [
        "Look for fluid fabrics, flattering necklines and soft colour near your face.",
        "Balance romantic pieces with clean tailoring or modern denim.",
        "Use colour analysis to find pinks, creams and pastels that brighten rather than wash you out."
      ],
      service: "Personal Colour Analysis",
      cta:
        "A colour analysis session can help you find the soft shades that make you look fresh, radiant and confident."
    },
    effortlessClassic: {
      title: "The Effortless Classic",
      summary:
        "You like pieces that feel timeless, balanced and easy to repeat across real life.",
      struggle:
        "Your wardrobe may feel sensible but not quite current, especially when your lifestyle changes.",
      tips: [
        "Update classic outfits with modern proportions, shoes or accessories.",
        "Create outfit formulas you can repeat for work, weekends and evenings.",
        "Choose quality basics in colours that work together instead of buying random separates."
      ],
      service: "Style Confidence Session",
      cta:
        "A style confidence session can help you modernise your classics without feeling overdone."
    },
    expressiveCreative: {
      title: "The Expressive Creative",
      summary:
        "You enjoy personality, colour, print or unexpected details that make outfits feel alive.",
      struggle:
        "Your wardrobe can become exciting but difficult to combine when every piece is trying to be the hero.",
      tips: [
        "Choose a few statement pieces and give them strong wardrobe foundations.",
        "Repeat colours across outfits so creative pieces still feel cohesive.",
        "Use accessories to express personality when the outfit needs to stay simple."
      ],
      service: "Personal Shopping",
      cta:
        "A personal shopping session can help you find expressive pieces that still work with your real wardrobe."
    },
    modernProfessional: {
      title: "The Modern Professional",
      summary:
        "You want to look capable, polished and current, with outfits that support your work and visibility.",
      struggle:
        "It is easy to default to safe workwear that feels serious but not energising or personal.",
      tips: [
        "Build a work capsule around strong jackets, polished separates and comfortable shoes.",
        "Use colour strategically to look fresh, approachable and confident.",
        "Choose pieces that transition from work to dinner so your wardrobe feels less divided."
      ],
      service: "Personal Shopping",
      cta:
        "Personal shopping can help you build a polished capsule for work, events and everyday confidence."
    }
  },
  questions: [
    {
      question: "When you get dressed, what do you most want to feel?",
      answers: [
        { label: "Calm, polished and uncluttered", result: "polishedMinimalist" },
        { label: "Soft, feminine and relaxed", result: "softRomantic" },
        { label: "Put together without trying too hard", result: "effortlessClassic" },
        { label: "Creative, interesting and expressive", result: "expressiveCreative" },
        { label: "Confident, capable and professional", result: "modernProfessional" }
      ]
    },
    {
      question: "Which outfit sounds most like something you would love?",
      answers: [
        { label: "A beautiful white shirt, tailored trousers and refined flats", result: "polishedMinimalist" },
        { label: "A soft blouse, flattering skirt and delicate jewellery", result: "softRomantic" },
        { label: "Dark denim, a blazer, knit top and easy loafers", result: "effortlessClassic" },
        { label: "A statement jacket, colour, print or unexpected accessory", result: "expressiveCreative" },
        { label: "A sharp jacket, elegant trousers and a polished shoe", result: "modernProfessional" }
      ]
    },
    {
      question: "What is your biggest wardrobe frustration right now?",
      answers: [
        { label: "Too much visual clutter and not enough simplicity", result: "polishedMinimalist" },
        { label: "Things feel too harsh, plain or unlike me", result: "softRomantic" },
        { label: "My wardrobe works, but it feels dated or uninspired", result: "effortlessClassic" },
        { label: "I own fun pieces but struggle to make outfits", result: "expressiveCreative" },
        { label: "I need to look more polished for work or visibility", result: "modernProfessional" }
      ]
    },
    {
      question: "Which colours do you naturally reach for?",
      answers: [
        { label: "Black, white, navy, grey, cream or camel", result: "polishedMinimalist" },
        { label: "Blush, ivory, soft blue, sage or gentle warm shades", result: "softRomantic" },
        { label: "Navy, denim, cream, chocolate, olive or burgundy", result: "effortlessClassic" },
        { label: "Colour, print, contrast or unexpected combinations", result: "expressiveCreative" },
        { label: "Navy, charcoal, white, jewel tones or confident accents", result: "modernProfessional" }
      ]
    },
    {
      question: "How do you usually shop?",
      answers: [
        { label: "Carefully, but I can overthink every purchase", result: "polishedMinimalist" },
        { label: "Emotionally, when something feels pretty or special", result: "softRomantic" },
        { label: "Safely, often buying similar pieces again", result: "effortlessClassic" },
        { label: "Impulsively, when something catches my eye", result: "expressiveCreative" },
        { label: "Under pressure, when I suddenly need outfits for work", result: "modernProfessional" }
      ]
    },
    {
      question: "What would help you most right now?",
      answers: [
        { label: "Editing down and refining what I own", result: "polishedMinimalist" },
        { label: "Finding colours and shapes that feel softer on me", result: "softRomantic" },
        { label: "Modern outfit formulas I can repeat", result: "effortlessClassic" },
        { label: "Making my personality pieces easier to wear", result: "expressiveCreative" },
        { label: "A polished capsule for work, meetings or events", result: "modernProfessional" }
      ]
    }
  ]
};

export const posts = [
  {
    title: "Colour Analysis Auckland: Discover the Shades That Make You Look Radiant",
    slug: "colour-analysis-auckland-shopping-smarter",
    excerpt:
      "A clear colour palette saves time, reduces returns and helps every new piece work harder in your wardrobe.",
    category: "Colour Analysis",
    readTime: "6 min read",
    keywords: [
      "colour analysis Auckland",
      "personal colour analysis Auckland",
      "colour consultant Auckland",
      "seasonal colour analysis NZ"
    ],
    intro:
      "If you have ever tried on a beautiful top and wondered why it made you look tired, flat or somehow not quite yourself, colour may be the missing piece. Personal colour analysis helps you understand which shades naturally brighten your skin, define your features and make your wardrobe easier to use.",
    sections: [
      {
        heading: "What is personal colour analysis?",
        body:
          "Colour analysis is a personalised styling process that identifies the colours, neutrals and contrasts that harmonise with your natural colouring. Rather than guessing in fitting rooms or buying whatever is trending, you learn which shades make you look fresh, polished and confident."
      },
      {
        heading: "Why it matters when you shop",
        body:
          "A clear palette helps you make faster decisions. You know which whites, blacks, blues, pinks, greens and metallics are worth trying, and which ones are likely to sit unworn. It also makes your wardrobe more cohesive because new pieces are easier to mix with what you already own."
      },
      {
        heading: "What you will use it for",
        body:
          "Your best colours can guide clothing, accessories, eyewear, hair direction and makeup choices. Many women find that once their colours are clear, even simple outfits look more intentional because the shades are doing some of the work."
      },
      {
        heading: "Who it is perfect for",
        body:
          "Colour analysis is especially helpful if your wardrobe feels inconsistent, if your colouring has changed, if you are returning to work, rebuilding confidence, or simply tired of buying clothes that look good on the hanger but not on you."
      }
    ],
    tips: [
      "Notice which colours attract compliments when you wear them.",
      "Compare your best outfits and look for repeated shades or contrast levels.",
      "Before buying, ask whether the colour works with at least three things you already own.",
      "Use your palette for makeup as well as clothing, especially lipstick and blush."
    ],
    cta:
      "Ready to discover your best colours? Book a personal colour analysis consultation in Auckland or online across New Zealand.",
    faq: [
      {
        question: "Is colour analysis only about seasons?",
        answer:
          "Seasonal colour systems can be useful, but the most helpful result is practical clarity: your best colours, neutrals, contrast level and how to use them in real outfits."
      },
      {
        question: "Can colour analysis be done online?",
        answer:
          "Yes. Online sessions can still provide clear guidance, especially when supported by good natural-light photos and a practical discussion about your wardrobe and lifestyle."
      }
    ]
  },
  {
    title: "The Wardrobe Refresh Checklist for Busy New Zealand Women",
    slug: "wardrobe-refresh-checklist-nz",
    excerpt:
      "What to keep, tailor, donate and replace when your wardrobe no longer reflects the woman you are now.",
    category: "Wardrobe",
    readTime: "7 min read",
    keywords: [
      "wardrobe consultant NZ",
      "wardrobe refresh Auckland",
      "wardrobe edit New Zealand",
      "capsule wardrobe NZ"
    ],
    intro:
      "A full wardrobe does not always mean an easy wardrobe. If you are standing in front of packed rails and still reaching for the same two outfits, a wardrobe refresh can help you reset what you own, remove the noise and create outfits that suit your life now.",
    sections: [
      {
        heading: "Start with your real lifestyle",
        body:
          "Before editing clothes, look honestly at how you spend your week. Work, school drop-offs, client meetings, weekends, travel, events and exercise all need different levels of polish. Your wardrobe should support your real calendar, not an imagined version of your life."
      },
      {
        heading: "Sort into clear categories",
        body:
          "Create piles for keep, tailor, repair, donate, sell and unsure. The unsure pile matters because it reveals where you need styling support. Sometimes a piece is wrong for you, but sometimes it simply needs the right outfit formula."
      },
      {
        heading: "Look for the missing links",
        body:
          "Most wardrobes are not missing drama; they are missing connectors. These are the useful pieces that make outfits work, such as the right neutral shoe, a better jacket, flattering denim, a modern knit or a versatile dress."
      },
      {
        heading: "Build outfit formulas",
        body:
          "Instead of relying on inspiration when you are busy, create repeatable outfit formulas. A formula might be wide-leg trousers, soft blouse, structured jacket and refined flat. Once the formula works, you can repeat it in different colours and fabrics."
      }
    ],
    tips: [
      "Remove anything damaged, uncomfortable or connected to guilt.",
      "Photograph outfits that work so you can repeat them quickly.",
      "Keep a shopping list based on gaps, not moods.",
      "Do not buy more statement pieces until your everyday foundations are strong."
    ],
    cta:
      "If your wardrobe feels full but not useful, a wardrobe refresh session can help you create clarity, outfit options and a smarter shopping plan.",
    faq: [
      {
        question: "Do I need to throw everything out?",
        answer:
          "No. A good wardrobe refresh is not about starting again. It is about understanding what earns its place, what can be restyled and what is quietly making dressing harder."
      },
      {
        question: "Can a wardrobe edit work on a budget?",
        answer:
          "Yes. In fact, editing first often saves money because you stop buying duplicates and start shopping only for the pieces that will make the biggest difference."
      }
    ]
  },
  {
    title: "What to Expect From a Personal Stylist in Auckland",
    slug: "personal-stylist-auckland-guide",
    excerpt:
      "A simple guide to the styling process, who it is for and how a session can make dressing easier.",
    category: "Personal Styling",
    readTime: "6 min read",
    keywords: [
      "personal stylist Auckland",
      "style coach for women NZ",
      "image consultant Auckland",
      "personal shopping Auckland"
    ],
    intro:
      "Working with a personal stylist can feel like a big step, especially if you have never done it before. The best styling experience should feel warm, practical and personal. It is not about being judged. It is about being supported to look and feel more like yourself.",
    sections: [
      {
        heading: "It starts with understanding you",
        body:
          "A personal styling session begins with your lifestyle, goals, body confidence, budget, shopping habits and the way you want to feel. The advice should be tailored to you, not copied from a trend report or a generic list of rules."
      },
      {
        heading: "You get clarity, not pressure",
        body:
          "A stylist helps you understand what suits you and why. That might include colours, shapes, proportions, outfit formulas, wardrobe gaps or shopping priorities. You should leave with direction, not a list of things you must suddenly become."
      },
      {
        heading: "Personal shopping becomes calmer",
        body:
          "When shopping with a stylist, the goal is not to buy more for the sake of it. It is to buy better. You focus on fit, fabric, colour, versatility and whether each piece supports the wardrobe you are building."
      },
      {
        heading: "Confidence is the real outcome",
        body:
          "The most valuable result is often emotional. When your wardrobe starts reflecting who you are now, getting dressed becomes lighter. You spend less energy second-guessing yourself and more time feeling present in your day."
      }
    ],
    tips: [
      "Bring honest examples of outfits you love and outfits you avoid.",
      "Share your budget early so recommendations are realistic.",
      "Be open about comfort, body changes and lifestyle needs.",
      "Ask for outfit formulas you can repeat after the session."
    ],
    cta:
      "If you are ready for warm, practical styling support, book a consultation with Emilia in Auckland or online.",
    faq: [
      {
        question: "Do I need to be fashionable to work with a stylist?",
        answer:
          "Not at all. Personal styling is for women who want dressing to feel easier, clearer and more aligned with who they are."
      },
      {
        question: "Can a stylist help if my body has changed?",
        answer:
          "Yes. Body and life changes are one of the most common reasons women seek styling support. The goal is to dress the body you have now with care and confidence."
      }
    ]
  },
  {
    title: "Style Coach for Women NZ: Rebuilding Confidence Through Personal Style",
    slug: "style-coach-for-women-nz-confidence",
    excerpt:
      "How style coaching can support women through life changes, new roles and seasons of low wardrobe confidence.",
    category: "Style Confidence",
    readTime: "5 min read",
    keywords: [
      "style coach for women NZ",
      "confidence styling NZ",
      "image consultant women NZ",
      "personal style coach"
    ],
    intro:
      "Personal style is not shallow. The way you get dressed can affect how you enter a room, how visible you feel and how much energy you spend thinking about yourself during the day. Style coaching helps you rebuild that confidence with kindness and strategy.",
    sections: [
      {
        heading: "Style changes when life changes",
        body:
          "New jobs, motherhood, weight changes, career shifts, dating, business ownership and ageing can all make your old wardrobe feel out of step. Style coaching helps you bridge the gap between who you were and who you are becoming."
      },
      {
        heading: "Confidence comes from alignment",
        body:
          "An outfit feels good when it suits your colouring, body, lifestyle and personality. When one of those pieces is missing, you may feel dressed but not settled. Styling brings those elements together so your clothes feel more natural on you."
      },
      {
        heading: "You do not need a dramatic makeover",
        body:
          "Most women do not need to become unrecognisable. Often the strongest changes are subtle: better colours, cleaner proportions, more intentional accessories and outfits that feel considered without feeling forced."
      },
      {
        heading: "The goal is everyday ease",
        body:
          "Style coaching gives you tools you can use repeatedly. You learn what to look for, what to avoid, how to combine pieces and how to make decisions without relying on guesswork."
      }
    ],
    tips: [
      "Identify three words you want your style to communicate.",
      "Keep photos of outfits where you feel relaxed and confident.",
      "Notice whether discomfort is about fit, colour, identity or habit.",
      "Start with one area of your wardrobe rather than trying to fix everything at once."
    ],
    cta:
      "If your style no longer feels like you, a style confidence session can help you find a direction that feels modern, practical and true to your life.",
    faq: [
      {
        question: "Is style coaching different from personal shopping?",
        answer:
          "Yes. Personal shopping focuses on finding pieces. Style coaching focuses on clarity, confidence and the decisions behind your wardrobe."
      },
      {
        question: "Can this be done online?",
        answer:
          "Yes. Online style coaching works well for wardrobe questions, outfit direction, colour guidance and shopping priorities."
      }
    ]
  },
  {
    title: "How to Stop Buying Clothes You Never Wear",
    slug: "stop-buying-clothes-you-never-wear",
    excerpt:
      "A practical guide to breaking the cycle of impulse shopping and building a wardrobe that earns its place.",
    category: "Smart Shopping",
    readTime: "6 min read",
    keywords: [
      "personal shopping Auckland",
      "shop smarter wardrobe",
      "wardrobe consultant NZ",
      "personal stylist shopping advice"
    ],
    intro:
      "Most wardrobe frustration does not come from owning too few clothes. It comes from owning pieces that almost work, pieces bought in a rush, or pieces that suit an imagined version of your life. Learning how to shop with more intention can save money, reduce clutter and make getting dressed feel calmer.",
    sections: [
      {
        heading: "Understand why you buy the wrong pieces",
        body:
          "Impulse purchases often happen when you are shopping for a feeling: confidence, freshness, fun or relief from wardrobe boredom. The item may feel exciting in the moment, but if it does not fit your colours, lifestyle or existing wardrobe, it quickly becomes another piece you avoid."
      },
      {
        heading: "Shop from a wardrobe plan",
        body:
          "Before buying anything new, identify what your wardrobe actually needs. A plan might include better denim, a refined jacket, comfortable work shoes or elevated casual tops. When you shop from a list, you are less likely to be distracted by pieces that do not solve a real problem."
      },
      {
        heading: "Use the three-outfit test",
        body:
          "Before you buy, ask whether the piece works with at least three items you already own. If you cannot imagine three outfits, it may be too disconnected from your wardrobe. This simple test helps new purchases become useful quickly."
      },
      {
        heading: "Know your non-negotiables",
        body:
          "Your non-negotiables might include sleeve length, neckline, fabric feel, heel height, colour depth or waist shape. When you know what consistently works for you, you can stop talking yourself into pieces that are beautiful but not practical for your life."
      }
    ],
    tips: [
      "Keep a note on your phone with your wardrobe gaps.",
      "Pause for 24 hours before buying anything outside your plan.",
      "Check care labels so maintenance fits your real routine.",
      "Avoid buying for one event unless the piece can be styled again."
    ],
    cta:
      "If shopping feels expensive, random or overwhelming, a personal shopping session can help you buy fewer pieces and make better decisions.",
    faq: [
      {
        question: "Does personal shopping mean buying a whole new wardrobe?",
        answer:
          "No. Personal shopping can be focused and strategic. The aim is to fill the right gaps, not encourage unnecessary spending."
      },
      {
        question: "Can a stylist help me shop within my budget?",
        answer:
          "Yes. A good stylist works with your budget and helps you prioritise the pieces that will make the biggest difference."
      }
    ]
  },
  {
    title: "How to Dress When Your Body Has Changed",
    slug: "how-to-dress-when-your-body-has-changed",
    excerpt:
      "Kind, practical style advice for women navigating body changes, new seasons and wardrobe uncertainty.",
    category: "Style Confidence",
    readTime: "7 min read",
    keywords: [
      "style coach for women NZ",
      "body confidence styling",
      "personal stylist for women",
      "wardrobe refresh after body change"
    ],
    intro:
      "Bodies change. Life changes. Careers, motherhood, hormones, health, stress, ageing and new routines can all shift how clothes feel on you. If your wardrobe still belongs to a past version of your body or lifestyle, getting dressed can become emotional. You deserve clothes that support who you are now.",
    sections: [
      {
        heading: "Start with compassion, not criticism",
        body:
          "The first step is to stop treating your wardrobe as evidence that your body is wrong. Clothes are tools. If they no longer fit, flatter or feel good, they may simply no longer be the right tools for this season of your life."
      },
      {
        heading: "Remove the daily friction",
        body:
          "Anything that pinches, pulls, rides up, gapes or makes you self-conscious should not be in your everyday rotation. You do not need to make every decision at once, but moving uncomfortable pieces out of sight can immediately make mornings calmer."
      },
      {
        heading: "Relearn your current proportions",
        body:
          "When your body changes, old outfit formulas may stop working. This does not mean you have lost your style. It means you need updated proportions, fabrics and silhouettes that create ease and balance for your body now."
      },
      {
        heading: "Choose confidence-building foundations",
        body:
          "A few well-fitting foundations can change everything: supportive undergarments, flattering denim or trousers, a beautiful jacket, comfortable shoes and tops in colours that brighten your face. Start there before chasing statement pieces."
      }
    ],
    tips: [
      "Put away clothes that make you feel bad before deciding what to do with them.",
      "Try different rises, lengths and fabric weights rather than assuming a style no longer suits you.",
      "Use colour near your face to bring freshness and focus upward.",
      "Build two or three reliable outfits for your most common weekly activities."
    ],
    cta:
      "If your wardrobe feels connected to a past version of you, a wardrobe refresh or style confidence session can help you dress your current body with care.",
    faq: [
      {
        question: "Should I wait until my body changes again before booking a stylist?",
        answer:
          "No. You deserve to feel comfortable and confident now. Styling can also be flexible, helping you choose pieces that adapt where possible."
      },
      {
        question: "Will a stylist tell me what I cannot wear?",
        answer:
          "The goal is not restriction. The goal is to find colours, shapes and outfit formulas that help you feel more at ease in your clothes."
      }
    ]
  }
];
