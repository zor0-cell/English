// ===== LISTENING LESSONS =====
    const listeningLessons = [
      {
        id: 'l1', title: 'Daily Life', emoji: '🏠',
        gradient: 'linear-gradient(135deg, #eab308, #a16207)',
        lessons: [
          {
            id: 1, title: 'Booking a Hotel',
            scenario: 'You will hear a conversation between a receptionist and a guest booking a hotel room.',
            transcript: `Receptionist: Good morning, Grand Hotel. How can I help you?\nGuest: Hello, I\'d like to book a room for two nights, please.\nReceptionist: Certainly. When would you like to stay?\nGuest: From the 15th to the 17th of March.\nReceptionist: We have a standard room at £89 per night or a deluxe room at £125.\nGuest: I\'ll take the standard room, please.\nReceptionist: May I have your name?\nGuest: It\'s Sarah Mitchell. That\'s M-I-T-C-H-E-L-L.\nReceptionist: Thank you, Ms. Mitchell. Breakfast is included.`,
            questions: [
              { q: 'How many nights does the guest want to stay?', options: ['One', 'Two', 'Three', 'Four'], answer: 1 },
              { q: 'How much is the standard room per night?', options: ['£69', '£89', '£125', '£145'], answer: 1 },
              { q: 'What is the guest\'s surname?', options: ['Marshall', 'Mitchell', 'Michael', 'Miller'], answer: 1 },
            ]
          },
          // ДОБАВЬ БОЛЬШЕ УРОКОВ СЮДА ↓
        ]
      },
      {
        id: 'l2', title: 'Academic', emoji: '🎓',
        gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
        lessons: [
          {
            id: 2, title: 'University Lecture',
            scenario: 'You will hear part of a university lecture about renewable energy sources.',
            transcript: `Professor: Today we\'ll discuss renewable energy. Solar power has seen a 90% cost reduction since 2010. Wind energy now provides 7% of global electricity. The challenge remains energy storage — batteries need to become more efficient and affordable.\n\nMany countries have set ambitious targets. Denmark aims for 100% renewable energy by 2050. China is the world\'s largest producer of solar panels. However, transitioning from fossil fuels requires massive infrastructure investment.`,
            questions: [
              { q: 'How much has solar power cost decreased since 2010?', options: ['50%', '70%', '90%', '95%'], answer: 2 },
              { q: 'What percentage of global electricity comes from wind?', options: ['3%', '5%', '7%', '10%'], answer: 2 },
              { q: 'Which country aims for 100% renewable by 2050?', options: ['Germany', 'Denmark', 'Sweden', 'Norway'], answer: 1 },
            ]
          },
          // ДОБАВЬ БОЛЬШЕ УРОКОВ СЮДА ↓
        ]
      },
      // ДОБАВЬ БОЛЬШЕ КАТЕГОРИЙ СЮДА ↓
    ];
