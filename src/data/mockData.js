export const mockData = {
  resources: [
    { name: "syringe", costPerUnit: "£12.99", quantity: "300",autoPurchaseLevel: "500", isAutoPurchase: true, category: "Admin", },
    { name: "laser", costPerUnit: "£25",  quantity: "520",autoPurchaseLevel: "500", isAutoPurchase: false, category: "Health", },
    { name: "Dental Floss", costPerUnit: "£5.50",  quantity: "560",autoPurchaseLevel: "500", isAutoPurchase: true, category: "Health", },
    { name: "Mouthwash", costPerUnit: "£8.99" , quantity: "500",autoPurchaseLevel: "500", isAutoPurchase: true, category: "Health",},
    { name: "Toothbrush", costPerUnit: "£4.25", quantity: "50" ,autoPurchaseLevel: "500", isAutoPurchase: true, category: "Admin",},
    { name: "Surgical Gloves", costPerUnit: "£45.99" , quantity: "4300",autoPurchaseLevel: "500", isAutoPurchase: true, category: "Health",},
    { name: "Scalpel", costPerUnit: "£22.75" , quantity: "60",autoPurchaseLevel: "500", isAutoPurchase: true, category: "Admin",},
    { name: "Dental Mirror", costPerUnit: "£7.50" , quantity: "321",autoPurchaseLevel: "500", isAutoPurchase: true, category: "Admin",},
    { name: "X-Ray Machine", costPerUnit: "£2500", quantity: "222",autoPurchaseLevel: "500", isAutoPurchase: true, category: "Admin",},
    { name: "Filling Material", costPerUnit: "£175.25", quantity: "2600" ,autoPurchaseLevel: "500", isAutoPurchase: true, category: "Health",},
    { name: "Dental Drill", costPerUnit: "£285", quantity: "980",autoPurchaseLevel: "500", isAutoPurchase: true, category: "Health",},
    { name: "Anaesthesia", costPerUnit: "£75.99", quantity: "830",autoPurchaseLevel: "500", isAutoPurchase: true,category: "Admin",},
    { name: "Toothpaste", costPerUnit: "£6.25" , quantity: "70",autoPurchaseLevel: "500", isAutoPurchase: false ,category: "Health",},
    { name: "Implants", costPerUnit: "£1200", quantity: "210",autoPurchaseLevel: "500", isAutoPurchase: true, category: "Admin",},
    { name: "Sutures", costPerUnit: "£12.99" , quantity: "40",autoPurchaseLevel: "500", isAutoPurchase: true,category: "Health",},
    { name: "Surgical Mask", costPerUnit: "£15.50" , quantity: "500",autoPurchaseLevel: "500", isAutoPurchase: true,category: "Admin",},
    { name: "Sterilization Machine", costPerUnit: "£1500", quantity: "970",autoPurchaseLevel: "500" ,isAutoPurchase: true,category: "Health",},
    { name: "Orthodontic Pliers", costPerUnit: "£90.75" , quantity: "5430",autoPurchaseLevel: "500",isAutoPurchase: true,category: "Admin",},
    { name: "Dental Light", costPerUnit: "£125" , quantity: "123",autoPurchaseLevel: "500",isAutoPurchase: false, category: "Health",},
    { name: "Rubber Dam", costPerUnit: "£28.99" , quantity: "312",autoPurchaseLevel: "500",isAutoPurchase: true,category: "Admin",},
    { name: "Periodontal Probe", costPerUnit: "£24.50" , quantity: "532",autoPurchaseLevel: "500",isAutoPurchase: true,category: "Health",},
    { name: "Cavity Liner", costPerUnit: "£42.25" , quantity: "560",autoPurchaseLevel: "500",isAutoPurchase: false,category: "Health",},
  ],

  resourcesRequest: [
    {
      category: "Health",
      staffMember: "Marianna",
      resources: "Mouthwash",
      autoPurchase: "yes",
      autoPurchaseLevel: "210",
   
    },
    {
      category: "Admin",
      staffMember: "Stefania",
      resources: "Implants",
      autoPurchase: "no",
      autoPurchaseLevel: "413",
     
    },
    {
      category: "Health",
      staffMember: "David",
      resources: "Dental Mirror",
      autoPurchase: "no",
      autoPurchaseLevel: "378",

    },
    {
      category: "Health",
      staffMember: "Julia",
      resources: "Sutures",
      autoPurchase: "no",
      autoPurchaseLevel: "219",
   
    },
    {
      category: "Admin",
      staffMember: "Elisabeth",
      resources: "Sterilization Machine",
      autoPurchase: "yes",
      autoPurchaseLevel: "27",
 
    },
    {
      category: "Health",
      staffMember: "Roberto",
      resources: "Dental Light",
      autoPurchase: "yes",
      autoPurchaseLevel: "171",

    },
    {
      category: "Admin",
      staffMember: "Carla",
      resources: "Surgical Gloves",
      autoPurchase: "yes",
      autoPurchaseLevel: "359",

    },
    {
      category: "Health",
      staffMember: "Simon",
      resources: "Periodontal Probe",
      autoPurchase: "yes",
      autoPurchaseLevel: "40",

    },
    {
      category: "Admin",
      staffMember: "Roberto",
      resources: "X-Ray Machine",
      autoPurchase: "no",
      autoPurchaseLevel: "490",

    },
    {
      category: "Health",
      staffMember: "Carla",
      resources: "Dental Drill",
      autoPurchase: "no",
      autoPurchaseLevel: "37",

    },
    {
      category: "Admin",
      staffMember: "Julia",
      resources: "Orthodontic Pliers",
      autoPurchase: "yes",
      autoPurchaseLevel: "468",
 
    },
    {
      category: "Health",
      staffMember: "Stefania",
      resources: "Filling Material",
      autoPurchase: "no",
      autoPurchaseLevel: "283",

    },
    {
      category: "Admin",
      staffMember: "David",
      resources: "Rubber Dam",
      autoPurchase: "yes",
      autoPurchaseLevel: "16",

    },
    {
      category: "Health",
      staffMember: "Simon",
      resources: "Anaesthesia",
      autoPurchase: "no",
      autoPurchaseLevel: "325",

    },
    {
      category: "Admin",
      staffMember: "Marianna",
      resources: "Cavity Liner",
      autoPurchase: "no",
      autoPurchaseLevel: "145",

    },
    {
      category: "Health",
      staffMember: "Simon",
      resources: "Toothpaste",
      autoPurchase: "yes",
      autoPurchaseLevel: "127",
  
    },
    {
      category: "Admin",
      staffMember: "Carla",
      resources: "Surgical Masks",
      autoPurchase: "yes",
      autoPurchaseLevel: "97",

    },
    {
      category: "Health",
      staffMember: "Simon",
      resources: "Intraoral Camera",
      autoPurchase: "yes",
      autoPurchaseLevel: "274",
     
    },
    {
      category: "Admin",
      staffMember: "Julia",
      resources: "Scalpel Blades",
      autoPurchase: "no",
      autoPurchaseLevel: "405",

    },
    {
      category: "Health",
      staffMember: "Roberto",
      resources: "Intraoral Camera",
      autoPurchase: "yes",
      autoPurchaseLevel: "274",
 
    },
    {
      category: "Admin",
      staffMember: "David",
      resources: "Dental Drill",
      autoPurchase: "no",
      autoPurchaseLevel: "405",
      
    },
  ],

  staff: [
    {
      name: "Stefania",
      role: "Dentist",
      overview:
        "Stefania has been a part of our team since 2020. She is an experienced dentist with a passion for helping her patients achieve the perfect smile. Stefania has a friendly and caring approach, and always goes the extra mile to make sure her patients feel comfortable during their appointments.",
      startDate: "01.01.2020",
      contractEndDate: "01.01.2025",
      manager: "George",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "David",
      role: "Dentist",
      overview:
        "David is a skilled dentist who has been with our practice since 2015. He is committed to providing high-quality care to his patients, and always takes the time to explain their treatment options in detail. David has a gentle and reassuring manner, and is always willing to go above and beyond to ensure his patients feel comfortable and confident.",
      startDate: "15.07.2015",
      contractEndDate: "15.07.2024",
      manager: "Harry",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      name: "Julia",
      role: "Dentist",
      overview:
        "Julia has been practicing dentistry for over a decade, and brings a wealth of knowledge and experience to our team. She is passionate about staying up-to-date with the latest advances in dental technology and techniques, and is always looking for ways to improve her patients' experience. Julia has a warm and friendly personality, and is committed to providing exceptional care to each and every patient she sees.",
      startDate: "30.09.2022",
      contractEndDate: "30.09.2025",
      manager: "Sarah",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80",
    },
    {
      name: "Marianna",
      role: "Assistant",
      overview:
        "Marianna is a highly skilled dental assistant who has been a part of our team since 2018. She is dedicated to providing excellent support to our dentists and ensuring that our patients receive the best possible care. Marianna is a great listener, and always takes the time to understand her patients' needs and concerns. She is a valuable asset to our practice, and we are lucky to have her on our team.",
      startDate: "25.02.2018",
      contractEndDate: "25.02.2024",
      manager: "George",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      name: "Roberto",
      role: "Assistant",
      overview:
        "Roberto is a hardworking and reliable dental assistant who joined our team in 2019. He is dedicated to providing top-notch support to our dentists and ensuring that our patients receive the best possible care. Roberto is a great team player, and always goes above and beyond to help out his colleagues. He is an asset to our practice, and we are lucky to have him on board.",
      startDate: "12.11.2019",
      contractEndDate: "12.11.2024",
      manager: "Harry",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Elisabeth",
      role: "Assistant",
      overview:
        "Elisabeth is a skilled and compassionate dental assistant who has been with our practice since 2017. She is passionate about providing the highest quality care to our patients, and is always looking for ways to improve their experience. Elisabeth has a friendly and approachable personality, and is always willing to go the extra mile to ensure her patients feel comfortable and at ease. She is a valuable member of our team, and we feel fortunate to have her with us.",
      startDate: "18.06.2017",
      contractEndDate: "18.06.2025",
      manager: "Sarah",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      name: "Carla",
      role: "Receptionist",
      overview:
        "Carla is a friendly and professional receptionist who joined our team in 2020. She is always ready to greet our patients with a smile, and is dedicated to ensuring that their experience at our practice is a positive one. Carla has excellent communication skills, and is able to answer any questions or concerns our patients may have. She is a valuable member of our team, and we are grateful to have her with us.",
      startDate: "08.03.2020",
      contractEndDate: "08.03.2024",
      manager: "George",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
    },
    {
      name: "Simon",
      role: "Receptionist",
      overview:
        "Simon is a skilled and efficient receptionist who has been with our practice since 2016. He is committed to providing excellent customer service to our patients, and always goes above and beyond to ensure that their needs are met. Simon has a friendly and outgoing personality, and is always happy to help in any way he can. He is an important member of our team, and we are fortunate to have him with us.",
      startDate: "22.09.2016",
      contractEndDate: "22.09.2025",
      manager: "Harry",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80",
    },
  ],

  clients: [
    {
      firstName: "Mariah",
      lastName: "Chan",
      email: "mariahchan@gmail.com",
      mobile: "+44123456789",
      image:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
      query: "consumer",
      hasAppointment: true,
      confirmedAppoinment: true,
      staff: "David",
    },
    {
      firstName: "Mark",
      lastName: "Wilson",
      email: "markwilson@gmail.com",
      mobile: "+44123456789",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      query: "consultant",
      hasAppointment: true,
      confirmedAppoinment: false,
      staff: "Elisabeth",
    },

    {
      firstName: "Ashley",
      lastName: "Williams",
      email: "ashleywilliams@gmail.com",
      mobile: "+44123446869",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      query: "consumer",
      hasAppointment: false,
      confirmedAppoinment: false,
      staff: "David",
    },
    {
      firstName: "John",
      lastName: "Lee",
      email: "johnlee@gmail.com",
      mobile: "+441234567895",
      image:
        "https://images.unsplash.com/photo-1542327897-d73f4005b533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      query: "consumer",
      hasAppointment: false,
      confirmedAppoinment: false,
      staff: "Julia",
    },
    {
      firstName: "Karen",
      lastName: "Chen",
      email: "karenchen@gmail.com",
      mobile: "+441234567896",
      image:
        "https://images.unsplash.com/photo-1529232356377-57971f020a94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      query: "consumer",
      hasAppointment: false,
      confirmedAppoinment: false,
      staff: "David",
    },
    {
      firstName: "Sean",
      lastName: "Baker",
      email: "seanbaker@gmail.com",
      mobile: "+441234567897",
      image:
        "https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      query: "consultant",
      hasAppointment: false,
      confirmedAppoinment: false,
      staff: "Roberto",
    },
    {
      firstName: "Sophie",
      lastName: "Kim",
      email: "sophiekim@gmail.com",
      mobile: "+441234567898",
      image:
        "https://images.unsplash.com/photo-1541257710737-06d667133a53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      query: "consumer",
      hasAppointment: false,
      confirmedAppoinment: false,
      staff: "Roberto",
    },
    {
      firstName: "Adam",
      lastName: "Kim",
      email: "adamjohnson@gmail.com",
      mobile: "+441234567899",
      image:
        "https://images.unsplash.com/photo-1613053341193-2b7f654c155f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      query: "consultant",
      hasAppointment: true,
      confirmedAppoinment: true,
      staff: "Marianna",
    },
    {
      firstName: "Ethan",
      lastName: "Chen",
      email: "ethanchen@gmail.com",
      mobile: "+441234567900",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      query: "consumer",
      hasAppointment: true,
      confirmedAppoinment: true,
      staff: "David",
    },
    {
      firstName: "Melanie",
      lastName: "Wong",
      email: "melaniewong@gmail.com",
      mobile: "+441234567901",
      image:
        "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
      query: "consumer",
      hasAppointment: true,
      confirmedAppoinment: true,
      staff: "Julia",
    },
    {
      firstName: "Peter",
      lastName: "Brown",
      email: "peterbrown@gmail.com",
      mobile: "+441234567902",
      image:
        "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      query: "consultant",
      hasAppointment: false,
      confirmedAppoinment: false,
      staff: "David",
    },
    {
      firstName: "Jasmine",
      lastName: "Wang",
      email: "jasminewang@gmail.com",
      mobile: "+441234567903",
      image:
        "https://images.unsplash.com/photo-1619443143113-9fc54b5609ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      query: "consumer",
      hasAppointment: false,
      confirmedAppoinment: false,
      staff: "Elisabeth",
    },
    {
      firstName: "David",
      lastName: "Chen",
      email: "davidchen@gmail.com",
      mobile: "+441234567904",
      image:
        "https://images.unsplash.com/photo-1615269245458-ff1785d41332?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      query: "consumer",
      hasAppointment: false,
      confirmedAppoinment: false,
      staff: "Stefania",
    },
    {
      firstName: "Alice",
      lastName: "Lee",
      email: "alicelee@gmail.com",
      mobile: "+441234567905",
      image:
        "https://images.unsplash.com/photo-1589698314382-629520d350cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
      query: "consultant",
      hasAppointment: true,
      confirmedAppoinment: false,
      staff: "Elisabeth",
    },
    {
      firstName: "Rachel",
      lastName: "Kim",
      email: "rachelkim@gmail.com",
      mobile: "+441234567906",
      image:
        "https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      query: "consumer",
      hasAppointment: true,
      confirmedAppoinment: false,
      staff: "Roberto",
    },
    {
      firstName: "Alex",
      lastName: "Nguyen",
      email: "alexnguyen@gmail.com",
      mobile: "+441234567907",
      image:
        "https://images.unsplash.com/photo-1611403119860-57c4937ef987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      query: "consultant",
      hasAppointment: true,
      confirmedAppoinment: false,
      staff: "David",
    },
    {
      firstName: "Emily",
      lastName: "Brown",
      email: "emilybrown@gmail.com",
      mobile: "+441234567908",
      image:
        "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      query: "consumer",
      hasAppointment: false,
      confirmedAppoinment: false,
      staff: "Marianna",
    },
    {
      firstName: "Jason",
      lastName: "Lee",
      email: "jasonlee@gmail.com",
      mobile: "+441234567909",
      image:
        "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      query: "consumer",
      hasAppointment: true,
      confirmedAppoinment: true,
      staff: "Roberto",
    },
    {
      firstName: "Erica",
      lastName: "Chen",
      email: "ericachen@gmail.com",
      mobile: "+441234567910",
      image:
        "https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      query: "consultant",
      hasAppointment: false,
      confirmedAppoinment: false,
      staff: "Elisabeth",
    },
    {
      firstName: "Bryan",
      lastName: "Kim",
      email: "bryankim@gmail.com",
      mobile: "+441234567911",
      image:
        "https://images.unsplash.com/photo-1594546325110-a530729c3f99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80",
      query: "consumer",
      hasAppointment: true,
      confirmedAppoinment: false,
      staff: "Julia",
    },
    {
      firstName: "Chloe",
      lastName: "Wong",
      email: "chloewong@gmail.com",
      mobile: "+4412345758543",
      query: "consumer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      hasAppointment: false,
      confirmedAppoinment: false,
      staff: "Roberto",
    },
    {
      firstName: "Daniel",
      lastName: "Lee",
      email: "daniellee@gmail.com",
      mobile: "+441234558543",
      query: "consumer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      hasAppointment: true,
      confirmedAppoinment: true,
      staff: "Julia",
    },
  ],

  bookings: [
    {
      client: "Mariah Chan",
      bookingDate: "05/03/2023",
      bookingTime: "15:00",
      confirmed: true,
      staff: "Marianna",
    },
    {
      client: "Mark Wilson",
      bookingDate: "08/03/2023",
      bookingTime: "11:00",
      confirmed: false,
      staff: "David",
    },
    {
      client: "Bryan Kim",
      bookingDate: "05/03/2023",
      bookingTime: "12:00",
      confirmed: true,
      staff: "Julia",
    },
    {
      client: "Alex Nguyen",
      bookingDate: "10/03/2023",
      bookingTime: "14:00",
      confirmed: false,
      staff: "David",
    },
    {
      client: "Jason Lee",
      bookingDate: "15/03/2023",
      bookingTime: "09:30",
      confirmed: true,
      staff: "Roberto",
    },
    {
      client: "Alice Lee",
      bookingDate: "02/03/2023",
      bookingTime: "16:00",
      confirmed: false,
      staff: "Elisabeth",
    },
    {
      client: "Adam Kim",
      bookingDate: "02/03/2023",
      bookingTime: "14:30",
      confirmed: true,
      staff: "Marianna",
    },
  ],
};

export default mockData;
