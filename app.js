const commonsImage = (file, width = 1100) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`;
const commonsPage = (file) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file).replaceAll("%20", "_")}`;

const DEFAULT_CARS = [
  {
    id: "car-1",
    name: "Hyundai Elantra",
    year: 2022,
    city: "Алматы",
    mode: "city",
    rate: 95,
    trust: 92,
    distance: "240 м",
    seats: 5,
    owner: "Асхат М.",
    ownerId: "seed-1",
    image: commonsImage("2022 Hyundai Elantra N in Fiery Red, Front Left, 04-18-2022.jpg"),
    imageSource: commonsPage("2022 Hyundai Elantra N in Fiery Red, Front Left, 04-18-2022.jpg"),
    photoCredit: "Wikimedia Commons",
    features: ["АКПП", "1.6 бензин", "Камера", "Bluetooth"],
    description: "Свежий городской седан для поездок по Алматы: экономичный расход, удобный салон и быстрый доступ через GhostRide.",
    specs: {
      body: "Седан",
      transmission: "Автомат",
      fuel: "Бензин",
      engine: "1.6 л",
      drive: "Передний",
      color: "Красный",
      deposit: 15000,
      plate: "GR 214 A",
      range: "580 км",
      location: "Алматы, Бостандык",
      smartLock: "GPS + удаленное открытие",
      insurance: "Demo каско + ОСАГО",
      available: "Сегодня, 09:00-23:00"
    },
    rules: ["Без курения в салоне", "Возврат в зеленой зоне Алматы", "Минимальный возраст: 21 год"],
    included: ["Зарядка USB", "Держатель телефона", "Чистый салон", "Техосмотр пройден"]
  },
  {
    id: "car-2",
    name: "Toyota Camry",
    year: 2023,
    city: "Алматы",
    mode: "event",
    rate: 145,
    trust: 98,
    distance: "450 м",
    seats: 5,
    owner: "Дамир К.",
    ownerId: "seed-2",
    image: commonsImage("2022 Toyota Camry SE Standard Package in Celestial Silver Metallic, Front Left, 08-06-2022.jpg"),
    imageSource: commonsPage("2022 Toyota Camry SE Standard Package in Celestial Silver Metallic, Front Left, 08-06-2022.jpg"),
    photoCredit: "Wikimedia Commons",
    features: ["Бизнес", "2.5 бензин", "Кожа", "CarPlay"],
    description: "Комфортный бизнес-седан для встреч, свадьбы, аэропорта и поездок по городу с премиальным ощущением.",
    specs: {
      body: "Седан",
      transmission: "Автомат",
      fuel: "Бензин",
      engine: "2.5 л",
      drive: "Передний",
      color: "Серебристый",
      deposit: 25000,
      plate: "GR 070 T",
      range: "620 км",
      location: "Алматы, Медеу",
      smartLock: "GPS + удаленное открытие",
      insurance: "Demo премиум-страхование",
      available: "Сегодня, 10:00-22:00"
    },
    rules: ["Только город и пригород", "Возврат с тем же уровнем топлива", "Для Event Mode нужен Trust 90+"],
    included: ["Камера заднего вида", "Кожаный салон", "Климат-контроль", "Bluetooth"]
  },
  {
    id: "car-3",
    name: "Kia K5",
    year: 2023,
    city: "Астана",
    mode: "city",
    rate: 120,
    trust: 95,
    distance: "180 м",
    seats: 5,
    owner: "Айбек Т.",
    ownerId: "seed-3",
    image: commonsImage("2021 Kia K5 GT-Line, front left.jpg"),
    imageSource: commonsPage("2021 Kia K5 GT-Line, front left.jpg"),
    photoCredit: "Wikimedia Commons",
    features: ["АКПП", "2.0 бензин", "Камера", "Зима"],
    description: "Динамичный седан для Астаны: удобен на каждый день, хорошо подходит для деловых поездок и вечернего города.",
    specs: {
      body: "Седан",
      transmission: "Автомат",
      fuel: "Бензин",
      engine: "2.0 л",
      drive: "Передний",
      color: "Серый",
      deposit: 18000,
      plate: "GR 505 K",
      range: "600 км",
      location: "Астана, Есиль",
      smartLock: "GPS + удаленное открытие",
      insurance: "Demo каско + ОСАГО",
      available: "Сегодня, 08:00-00:00"
    },
    rules: ["Зимняя резина включена", "Не выезжать за пределы области без согласования", "Фото салона до и после аренды"],
    included: ["Подогрев сидений", "Камера", "USB-C", "Чистка после каждой 3-й аренды"]
  },
  {
    id: "car-4",
    name: "Nissan Leaf",
    year: 2021,
    city: "Шымкент",
    mode: "delivery",
    rate: 80,
    trust: 96,
    distance: "520 м",
    seats: 5,
    owner: "Марат С.",
    ownerId: "seed-4",
    image: commonsImage("Nissan Leaf (2021) (52089491583).jpg"),
    imageSource: commonsPage("Nissan Leaf (2021) (52089491583).jpg"),
    photoCredit: "Wikimedia Commons",
    features: ["Электро", "Запас 240 км", "Эконом", "USB"],
    description: "Электромобиль для доставки и коротких городских поездок: тихий, дешевый в эксплуатации и удобный для курьеров.",
    specs: {
      body: "Хэтчбек",
      transmission: "Редуктор EV",
      fuel: "Электро",
      engine: "40 кВт⋅ч",
      drive: "Передний",
      color: "Белый",
      deposit: 12000,
      plate: "GR 821 E",
      range: "240 км",
      location: "Шымкент, Аль-Фараби",
      smartLock: "GPS + удаленное открытие",
      insurance: "Demo EV-страхование",
      available: "Сегодня, 07:00-21:00"
    },
    rules: ["Вернуть с зарядом от 30%", "Delivery Mode до 8 часов", "Курьерская сумка без острых креплений"],
    included: ["Кабель зарядки", "Eco Mode", "Большой багажник", "Низкая стоимость минуты"]
  },
  {
    id: "car-5",
    name: "Mercedes E-Class",
    year: 2022,
    city: "Астана",
    mode: "event",
    rate: 220,
    trust: 89,
    distance: "900 м",
    seats: 5,
    owner: "Ержан Б.",
    ownerId: "seed-5",
    image: commonsImage("2022 Mercedes E200 AMG LINE MHEV Auto 1.jpg"),
    imageSource: commonsPage("2022 Mercedes E200 AMG LINE MHEV Auto 1.jpg"),
    photoCredit: "Wikimedia Commons",
    features: ["Premium", "AMG Line", "Кожа", "Комфорт"],
    description: "Премиальный седан для особых случаев: свадьба, свидание, бизнес-встреча или трансфер с высоким уровнем комфорта.",
    specs: {
      body: "Седан",
      transmission: "Автомат",
      fuel: "Бензин MHEV",
      engine: "2.0 л",
      drive: "Задний",
      color: "Белый",
      deposit: 45000,
      plate: "GR 213 M",
      range: "650 км",
      location: "Астана, Байтерек",
      smartLock: "GPS + удаленное открытие",
      insurance: "Demo premium protection",
      available: "Сегодня, 12:00-23:00"
    },
    rules: ["Только Event Mode", "Trust Score от 88", "Возврат после фотофиксации кузова"],
    included: ["Премиальный салон", "Климат-контроль", "Ambient Light", "Владелец на связи"]
  },
  {
    id: "car-6",
    name: "Hyundai Solaris",
    year: 2020,
    city: "Актобе",
    mode: "weekend",
    rate: 85,
    trust: 91,
    distance: "310 м",
    seats: 5,
    owner: "Алина Р.",
    ownerId: "seed-6",
    image: commonsImage("Hyundai Solaris (HC).jpg"),
    imageSource: commonsPage("Hyundai Solaris (HC).jpg"),
    photoCredit: "Wikimedia Commons",
    features: ["Эконом", "АКПП", "Кондиционер", "USB"],
    description: "Надежный эконом-седан для выходных, поездок по делам и коротких выездов за город.",
    specs: {
      body: "Седан",
      transmission: "Автомат",
      fuel: "Бензин",
      engine: "1.6 л",
      drive: "Передний",
      color: "Синий",
      deposit: 12000,
      plate: "GR 620 H",
      range: "540 км",
      location: "Актобе, центр",
      smartLock: "GPS + удаленное открытие",
      insurance: "Demo каско + ОСАГО",
      available: "Пт 18:00 - Вс 22:00"
    },
    rules: ["Weekend Mode от 12 часов", "Без поездок по грунтовке", "Возврат чистого салона"],
    included: ["Кондиционер", "USB", "Экономичный расход", "Детское кресло по запросу"]
  }
];

const DEFAULT_BY_ID = Object.fromEntries(DEFAULT_CARS.map((car) => [car.id, car]));

function normalizeCar(car) {
  const defaults = DEFAULT_BY_ID[car.id] || DEFAULT_CARS.find((item) => item.name === car.name);
  const fallbackSpecs = {
    body: "Седан",
    transmission: car.features?.find((item) => item.includes("АКПП")) ? "Автомат" : "Уточняется",
    fuel: car.features?.find((item) => item.toLowerCase().includes("электро")) ? "Электро" : "Бензин",
    engine: "Уточняется",
    drive: "Передний",
    color: "По фото",
    deposit: car.trust >= 95 ? 10000 : 18000,
    plate: "GR DEMO",
    range: "Уточняется",
    location: `${car.city || "Казахстан"}, точка выдачи`,
    smartLock: "GPS + удаленное открытие",
    insurance: "Demo-страхование",
    available: "По расписанию владельца"
  };

  if (defaults) {
    return {
      ...defaults,
      ...car,
      image: defaults.image,
      imageSource: defaults.imageSource,
      photoCredit: defaults.photoCredit,
      features: car.features?.length ? car.features : defaults.features,
      description: car.description || defaults.description,
      specs: { ...defaults.specs, ...(car.specs || {}) },
      rules: car.rules?.length ? car.rules : defaults.rules,
      included: car.included?.length ? car.included : defaults.included
    };
  }

  return {
    ...car,
    image: car.image || DEFAULT_CARS[1].image,
    imageSource: car.imageSource || "",
    photoCredit: car.photoCredit || "Фото владельца",
    description: car.description || "Машина добавлена владельцем в demo-каталог GhostRide. Перед реальной арендой платформа проверяет документы, страхование и телематику.",
    specs: { ...fallbackSpecs, ...(car.specs || {}) },
    rules: car.rules?.length ? car.rules : ["Без курения в салоне", "Возврат в разрешенной зоне", "Фотофиксация до и после поездки"],
    included: car.included?.length ? car.included : ["GPS-телематика", "Demo-страхование", "Поддержка GhostRide", "Удаленное открытие"]
  };
}

const CITIES = ["Все", "Алматы", "Астана", "Шымкент", "Актобе", "Уральск", "Атырау"];
const MODES = [["all", "Все"], ["city", "Город"], ["weekend", "Выходные"], ["event", "Мероприятие"], ["delivery", "Доставка"]];
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const money = (value) => new Intl.NumberFormat("ru-KZ", { style: "currency", currency: "KZT", maximumFractionDigits: 0 }).format(value);
const read = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

let state = {
  user: read("gr_user", null),
  cars: read("gr_cars", DEFAULT_CARS).map(normalizeCar),
  bookings: read("gr_bookings", []),
  city: "Все",
  mode: "all"
};

function persist() {
  write("gr_user", state.user);
  write("gr_cars", state.cars);
  write("gr_bookings", state.bookings);
}

function toast(message) {
  let node = $("#toast");
  if (!node) {
    node = document.createElement("div");
    node.id = "toast";
    node.className = "toast";
    document.body.appendChild(node);
  }
  node.textContent = message;
  node.classList.add("show");
  setTimeout(() => node.classList.remove("show"), 3000);
}

function injectAuth() {
  if ($("#authModal")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal-bg" id="authModal">
      <div class="modal">
        <div class="modal-head">
          <div><h2>Войти в GhostRide</h2><p>Demo-аккаунт для аренды и владельца.</p></div>
          <button class="btn" data-auth-close type="button"><i data-lucide="x"></i></button>
        </div>
        <div class="modal-body">
          <label class="field">Имя<input id="authName" value="Асхат" /></label>
          <label class="field">Телефон или email<input id="authContact" value="+7 700 000 00 00" /></label>
          <label class="field">Роль<select id="authRole"><option value="renter">Арендатор</option><option value="owner">Владелец</option><option value="both">Арендатор и владелец</option></select></label>
        </div>
        <div class="modal-actions">
          <button class="btn" data-auth-close type="button">Отмена</button>
          <button class="btn primary" id="authSubmit" type="button"><i data-lucide="check"></i>Войти</button>
        </div>
      </div>
    </div>
  `);
}

function openAuth() {
  injectAuth();
  $("#authModal").classList.add("open");
  document.body.classList.add("lock");
  if (window.lucide) lucide.createIcons();
}

function closeAuth() {
  $("#authModal")?.classList.remove("open");
  document.body.classList.remove("lock");
}

function requireUser(callback) {
  if (!state.user) {
    openAuth();
    toast("Сначала войдите в demo-аккаунт.");
    return false;
  }
  callback?.();
  return true;
}

function login() {
  const oldUser = read("gr_user", null);
  state.user = {
    id: oldUser?.id || `user-${Date.now()}`,
    name: $("#authName").value.trim() || "Demo User",
    contact: $("#authContact").value.trim(),
    role: $("#authRole").value
  };
  persist();
  closeAuth();
  renderShell();
  initPage();
  toast(`Добро пожаловать, ${state.user.name}.`);
}

function logout() {
  state.user = null;
  persist();
  renderShell();
  initPage();
  toast("Вы вышли из demo-аккаунта.");
}

function roleLabel(role) {
  return { renter: "Арендатор", owner: "Владелец", both: "Арендатор и владелец" }[role] || "Пользователь";
}

function renderShell() {
  const page = document.body.dataset.page;
  $$(".nav a").forEach((link) => link.classList.toggle("active", link.getAttribute("href")?.includes(page)));
  $$("[data-auth-label]").forEach((node) => node.textContent = state.user ? state.user.name : "Войти");
  if (window.lucide) lucide.createIcons();
}

function visibleCars() {
  return state.cars.filter((car) => (state.city === "Все" || car.city === state.city) && (state.mode === "all" || car.mode === state.mode));
}

function carCard(car) {
  return `
    <article class="card">
      <div class="pic">
        <img src="${car.image}" alt="${car.name}" />
        <span class="badge rate">${car.rate}₸/мин</span>
        <span class="badge trust">Trust ${car.trust}</span>
      </div>
      <div class="card-body">
        <div class="split"><div><h3>${car.name}</h3><p class="muted">${car.year} - ${car.owner}</p></div><strong>${car.distance}</strong></div>
        <div class="tags"><span class="tag">${car.city}</span><span class="tag">${car.seats} мест</span>${car.features.slice(0, 4).map((item) => `<span class="tag">${item}</span>`).join("")}</div>
        <div class="card-actions"><a class="btn primary" href="checkout.html?car=${car.id}"><i data-lucide="calendar-check"></i>Забронировать</a><a class="btn" href="car-details.html?car=${car.id}"><i data-lucide="eye"></i>Детали</a></div>
      </div>
    </article>
  `;
}

function renderCarsPage() {
  $("#cityChips").innerHTML = CITIES.map((city) => `<button class="chip ${state.city === city ? "active" : ""}" data-city="${city}" type="button">${city}</button>`).join("");
  $("#modeChips").innerHTML = MODES.map((mode) => `<button class="chip ${state.mode === mode[0] ? "active" : ""}" data-mode="${mode[0]}" type="button">${mode[1]}</button>`).join("");
  const cars = visibleCars();
  $("#carsGrid").innerHTML = cars.length ? cars.map(carCard).join("") : `<div class="empty">Нет машин под выбранный фильтр. Добавьте свою машину на странице владельца.</div>`;
  if (window.lucide) lucide.createIcons();
}

function renderHome() {
  $("#homeCars").textContent = state.cars.length;
  $("#homeBookings").textContent = state.bookings.length;
  $("#homePreviewCar").textContent = state.cars[0]?.name || "Hyundai Elantra";
}

function renderCalculator() {
  const hours = Number($("#hours")?.value || 4);
  const rate = Number($("#rate")?.value || 3500);
  const fee = Number($("#fee")?.value || 20);
  const gross = hours * rate * 30;
  const platform = Math.round(gross * fee / 100);
  $("#hVal").textContent = `${hours} ч`;
  $("#rVal").textContent = money(rate);
  $("#fVal").textContent = `${fee}%`;
  $("#income").textContent = money(gross - platform);
  $("#platform").textContent = `Комиссия: ${money(platform)}`;
}

function addCar(event) {
  event.preventDefault();
  requireUser(() => {
    const name = $("#carName").value.trim();
    if (!name) return toast("Введите название авто.");
    state.cars.unshift(normalizeCar({
      id: `car-${Date.now()}`,
      name,
      year: Number($("#carYear").value) || 2023,
      city: $("#carCity").value,
      mode: $("#carMode").value,
      rate: Number($("#carRate").value) || 100,
      trust: 90 + Math.floor(Math.random() * 8),
      distance: `${120 + Math.floor(Math.random() * 800)} м`,
      seats: Number($("#carSeats").value) || 5,
      owner: state.user.name,
      ownerId: state.user.id,
      image: $("#carImage").value.trim() || DEFAULT_CARS[1].image,
      features: $("#carFeatures").value.split(",").map((item) => item.trim()).filter(Boolean)
    }));
    persist();
    toast("Машина добавлена в каталог.");
    setTimeout(() => location.href = "cars.html", 600);
  });
}

function checkoutCar() {
  const params = new URLSearchParams(location.search);
  return state.cars.find((car) => car.id === params.get("car")) || state.cars[0];
}

function specTile(label, value) {
  return `<div class="spec-tile"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderCarDetails() {
  const car = checkoutCar();
  const specs = car.specs || {};
  $("#carDetails").innerHTML = `
    <div class="detail-layout">
      <div>
        <div class="detail-photo">
          <img src="${car.image}" alt="${car.name}" />
          <span class="badge rate">${car.rate}₸/мин</span>
          <span class="badge trust">Trust ${car.trust}</span>
        </div>
        <div class="photo-source">${car.photoCredit}${car.imageSource ? ` · <a href="${car.imageSource}" target="_blank" rel="noreferrer">источник фото</a>` : ""}</div>
      </div>

      <aside class="panel detail-summary">
        <p class="eyebrow">${car.city} · ${car.mode}</p>
        <h1>${car.name}</h1>
        <p class="lead">${car.description}</p>
        <div class="tags">
          <span class="tag">${car.year}</span>
          <span class="tag">${car.seats} мест</span>
          ${car.features.map((item) => `<span class="tag">${item}</span>`).join("")}
        </div>
        <div class="detail-actions">
          <a class="btn primary" href="checkout.html?car=${car.id}"><i data-lucide="calendar-check"></i>Забронировать</a>
          <a class="btn" href="cars.html"><i data-lucide="arrow-left"></i>Назад</a>
        </div>
      </aside>
    </div>

    <div class="detail-grid">
      <article class="panel detail-section">
        <div class="section-head compact"><div><p class="eyebrow">Характеристики</p><h2>Паспорт авто</h2></div></div>
        <div class="spec-grid">
          ${specTile("Кузов", specs.body)}
          ${specTile("Коробка", specs.transmission)}
          ${specTile("Топливо", specs.fuel)}
          ${specTile("Двигатель", specs.engine)}
          ${specTile("Привод", specs.drive)}
          ${specTile("Цвет", specs.color)}
          ${specTile("Запас хода", specs.range)}
          ${specTile("Депозит", money(specs.deposit))}
        </div>
      </article>

      <article class="panel detail-section">
        <div class="section-head compact"><div><p class="eyebrow">Аренда</p><h2>Условия</h2></div></div>
        <div class="line"><div><strong>Владелец</strong><p>${car.owner}</p></div><span class="status">Проверен</span></div>
        <div class="line"><div><strong>Локация</strong><p>${specs.location}</p></div><span class="status">${car.distance}</span></div>
        <div class="line"><div><strong>Доступность</strong><p>${specs.available}</p></div><span class="status">Online</span></div>
        <div class="line"><div><strong>Телематика</strong><p>${specs.smartLock}</p></div><span class="status">${specs.plate}</span></div>
      </article>

      <article class="panel detail-section">
        <div class="section-head compact"><div><p class="eyebrow">Включено</p><h2>Что получает арендатор</h2></div></div>
        <div class="check-list">${car.included.map((item) => `<div><i data-lucide="check"></i><span>${item}</span></div>`).join("")}</div>
      </article>

      <article class="panel detail-section">
        <div class="section-head compact"><div><p class="eyebrow">Правила</p><h2>Перед поездкой</h2></div></div>
        <div class="check-list">${car.rules.map((item) => `<div><i data-lucide="shield-check"></i><span>${item}</span></div>`).join("")}</div>
      </article>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

function renderCheckout() {
  const car = checkoutCar();
  $("#checkoutCar").innerHTML = `
    <div class="checkout-photo"><img src="${car.image}" alt="${car.name}" /></div>
    <div class="payment-card">
      <p>Выбранное авто</p>
      <h2>${car.name}</h2>
      <div class="tags"><span class="tag">${car.city}</span><span class="tag">${car.rate}₸/мин</span><span class="tag">Trust ${car.trust}</span></div>
    </div>
    <div style="margin-top:16px" class="grid">
      <div class="line"><div><strong>Владелец</strong><p>${car.owner}</p></div><span class="status">Проверен</span></div>
      <div class="line"><div><strong>Дистанция</strong><p>${car.distance}</p></div><span class="status">${car.seats} мест</span></div>
    </div>
    <a style="margin-top:16px" class="btn full" href="car-details.html?car=${car.id}"><i data-lucide="eye"></i>Открыть детали машины</a>
  `;
  updateTotal();
}

function updateTotal() {
  const car = checkoutCar();
  const duration = Number($("#duration").value);
  const minutes = duration >= 1440 ? 2880 : duration;
  const multiplier = duration >= 1440 ? 0.42 : 1;
  const discount = car.trust >= 95 ? 0.92 : car.trust >= 90 ? 0.96 : 1;
  const total = Math.round(car.rate * minutes * multiplier * discount);
  $("#total").textContent = money(total);
  $("#deposit").textContent = `Депозит demo: ${money(car.trust >= 95 ? 10000 : 18000)}`;
}

function payBooking() {
  requireUser(() => {
    const car = checkoutCar();
    const duration = $("#duration");
    const total = Number($("#total").textContent.replace(/[^0-9]/g, "")) || 0;
    state.bookings.unshift({
      id: `booking-${Date.now()}`,
      carId: car.id,
      userId: state.user.id,
      total,
      method: $("#method").value,
      duration: duration.options[duration.selectedIndex].text,
      date: new Date().toLocaleDateString("ru-KZ")
    });
    persist();
    toast(`Оплата прошла. ${car.name} забронирована.`);
    setTimeout(() => location.href = "dashboard.html", 700);
  });
}

function line(title, text, status) {
  return `<div class="line"><div><strong>${title}</strong><p>${text}</p></div><span class="status">${status}</span></div>`;
}

function renderDashboard() {
  const userId = state.user?.id || "guest";
  const name = state.user?.name || "Гость";
  $("#profileName").textContent = name;
  $("#profileMeta").textContent = state.user ? `${state.user.contact} - ${roleLabel(state.user.role)}` : "Войдите, чтобы начать";
  $("#avatar").textContent = (name[0] || "G").toUpperCase();
  $("#profileLogin").innerHTML = state.user ? `<i data-lucide="log-out"></i>Выйти` : `<i data-lucide="log-in"></i>Войти в demo`;

  const myBookings = state.bookings.filter((booking) => booking.userId === userId);
  const myCars = state.cars.filter((car) => car.ownerId === userId);
  const ownerBookings = state.bookings.filter((booking) => myCars.some((car) => car.id === booking.carId));
  const gross = ownerBookings.reduce((sum, booking) => sum + booking.total, 0);
  const fee = Math.round(gross * 0.2);
  const payout = gross - fee;

  $("#bookingList").innerHTML = myBookings.length
    ? myBookings.map((booking) => line(state.cars.find((car) => car.id === booking.carId)?.name || "Авто", `${booking.duration} - ${booking.method} - ${booking.date}`, money(booking.total))).join("")
    : `<div class="empty">Броней пока нет.</div>`;

  $("#ownerList").innerHTML = myCars.length
    ? myCars.map((car) => line(car.name, `${car.city} - ${car.rate}₸/мин - Trust ${car.trust}`, "Активно")).join("")
    : `<div class="empty">У вас пока нет авто.</div>`;

  $("#walletList").innerHTML =
    line("Баланс владельца", "Доход от оплаченных demo-броней", money(payout)) +
    line("Комиссия GhostRide", "20% с заказов", money(fee)) +
    `<div class="line"><div><strong>Demo Card •••• 7777</strong><p>Карта для выплат подключена</p></div><button class="btn" id="payoutBtn" type="button">Выплата</button></div>`;
  $("#payoutBtn")?.addEventListener("click", () => toast("Demo-выплата создана."));
  if (window.lucide) lucide.createIcons();
}

function initPage() {
  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "cars") renderCarsPage();
  if (page === "owners") {
    renderCalculator();
    $("#ownerForm").onsubmit = addCar;
  }
  if (page === "car-details") renderCarDetails();
  if (page === "checkout") {
    renderCheckout();
    $("#duration").onchange = updateTotal;
    $("#payBtn").onclick = payBooking;
  }
  if (page === "dashboard") renderDashboard();
}

document.addEventListener("click", (event) => {
  const authOpen = event.target.closest("[data-auth-open]");
  const authClose = event.target.closest("[data-auth-close]");
  const city = event.target.closest("[data-city]");
  const mode = event.target.closest("[data-mode]");
  const info = event.target.closest("[data-info]");
  const tab = event.target.closest("[data-view]");
  if (authOpen) openAuth();
  if (authClose) closeAuth();
  if (city) { state.city = city.dataset.city; renderCarsPage(); }
  if (mode) { state.mode = mode.dataset.mode; renderCarsPage(); }
  if (info) {
    const car = state.cars.find((item) => item.id === info.dataset.info);
    if (car) toast(`${car.name}: ${car.city}, ${car.rate}₸/мин, владелец ${car.owner}.`);
  }
  if (tab) {
    $$(".tab").forEach((button) => button.classList.toggle("active", button === tab));
    $$(".view").forEach((view) => view.classList.toggle("active", view.id === tab.dataset.view));
  }
});

document.addEventListener("input", (event) => {
  if (["hours", "rate", "fee"].includes(event.target.id)) renderCalculator();
});

injectAuth();
document.addEventListener("click", (event) => {
  if (event.target.id === "authSubmit") login();
  if (event.target.id === "profileLogin") state.user ? logout() : openAuth();
});
renderShell();
initPage();
