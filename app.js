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
  const defaults = DEFAULT_BY_ID[car.id];
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
  verifications: read("gr_verifications", {}),
  city: "Все",
  mode: "all"
};

let selectedCarPhoto = "";

function localDateValue(date = new Date()) {
  const copy = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return copy.toISOString().slice(0, 10);
}

function localTimeValue(date = new Date(Date.now() + 30 * 60000)) {
  const minutes = Math.ceil(date.getMinutes() / 15) * 15;
  date.setMinutes(minutes, 0, 0);
  return date.toTimeString().slice(0, 5);
}

function bookingDurationMinutes() {
  const duration = Number($("#duration")?.value || 30);
  return duration >= 1440 ? 2880 : duration;
}

function selectedBookingRange() {
  const date = $("#bookingDate")?.value;
  const time = $("#bookingTime")?.value;
  if (!date || !time) return null;
  const start = new Date(`${date}T${time}`);
  if (Number.isNaN(start.getTime())) return null;
  const end = new Date(start.getTime() + bookingDurationMinutes() * 60000);
  return { start, end };
}

function bookingRange(booking) {
  if (!booking.startAt || !booking.endAt) return null;
  const start = new Date(booking.startAt);
  const end = new Date(booking.endAt);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return null;
  return { start, end };
}

function isActiveBooking(booking) {
  if (booking.cancelled) return false;
  const range = bookingRange(booking);
  if (!range) return true;
  return range.end.getTime() > Date.now();
}

function bookingOverlaps(booking, start, end) {
  if (!isActiveBooking(booking)) return false;
  const range = bookingRange(booking);
  if (!range) return true;
  return start < range.end && end > range.start;
}

function bookingsForCar(carId) {
  return state.bookings.filter((booking) => booking.carId === carId && isActiveBooking(booking));
}

function nextBookingForCar(carId) {
  return bookingsForCar(carId).sort((a, b) => {
    const aTime = bookingRange(a)?.start.getTime() || 0;
    const bTime = bookingRange(b)?.start.getTime() || 0;
    return aTime - bTime;
  })[0];
}

function hasBookingConflict(carId, start, end) {
  return state.bookings.some((booking) => booking.carId === carId && bookingOverlaps(booking, start, end));
}

function formatDateTime(value) {
  if (!value) return "";
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ru-KZ", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }).format(date);
}

function formatBookingPeriod(booking) {
  const range = bookingRange(booking);
  if (!range) return booking.date || "Время не указано";
  return `${formatDateTime(range.start)} - ${formatDateTime(range.end)}`;
}

function carStatus(car) {
  const booking = nextBookingForCar(car.id);
  if (!booking) return { busy: false, label: "Свободно", meta: "Можно бронировать" };
  const range = bookingRange(booking);
  return {
    busy: true,
    label: "Занято",
    meta: range ? `до ${formatDateTime(range.end)}` : "бронь активна"
  };
}

function digitsOnly(value) {
  return (value || "").replace(/\D/g, "");
}

function normalizePlate(value) {
  return (value || "").replace(/[\s-]/g, "").toUpperCase();
}

function validateIin(value) {
  const iin = digitsOnly(value);
  if (!/^\d{12}$/.test(iin)) return { ok: false, text: "ИИН должен состоять из 12 цифр" };
  const month = Number(iin.slice(2, 4));
  const day = Number(iin.slice(4, 6));
  if (month < 1 || month > 12 || day < 1 || day > 31) return { ok: false, text: "Дата рождения в ИИН выглядит неверно" };
  return { ok: true, text: "Личность подтверждена demo-проверкой" };
}

function validateIdCard(value) {
  const number = digitsOnly(value);
  if (number.length < 8 || number.length > 12) return { ok: false, text: "Номер удостоверения должен быть 8-12 цифр" };
  return { ok: true, text: "Удостоверение принято" };
}

function validateDriverLicense(value) {
  const number = (value || "").replace(/\s/g, "").toUpperCase();
  if (!/^[A-ZА-Я0-9]{6,14}$/.test(number)) return { ok: false, text: "Номер прав должен быть 6-14 букв/цифр" };
  return { ok: true, text: "Водитель допущен к аренде" };
}

function validatePlate(value) {
  const plate = normalizePlate(value);
  if (!/^\d{3}[A-ZА-Я]{3}\d{2}$/.test(plate)) return { ok: false, text: "Формат demo: 777ABC02" };
  return { ok: true, text: "Госномер авто прошел demo-проверку" };
}

function userVerification(userId = state.user?.id) {
  return userId ? state.verifications[userId] || null : null;
}

function isRenterVerified(userId = state.user?.id) {
  const verification = userVerification(userId);
  return Boolean(verification?.identity?.ok && verification?.idCard?.ok && verification?.driver?.ok);
}

function isOwnerVehicleVerified(userId = state.user?.id) {
  const verification = userVerification(userId);
  return Boolean(verification?.plate?.ok);
}

function isCarPlateVerified(car, userId = state.user?.id) {
  const verification = userVerification(userId);
  const verifiedPlate = normalizePlate(verification?.plateNumber || "");
  const carPlate = normalizePlate(car?.specs?.plate || "");
  return Boolean(car?.vehicleCheck?.ok || (verification?.plate?.ok && verifiedPlate && verifiedPlate === carPlate));
}

function persist() {
  write("gr_user", state.user);
  write("gr_cars", state.cars);
  write("gr_bookings", state.bookings);
  write("gr_verifications", state.verifications);
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
  const status = carStatus(car);
  return `
    <article class="card ${status.busy ? "occupied" : ""}">
      <div class="pic">
        <img src="${car.image}" alt="${car.name}" />
        <span class="badge rate">${car.rate}₸/мин</span>
        <span class="badge trust">${status.busy ? "Занято" : `Trust ${car.trust}`}</span>
      </div>
      <div class="card-body">
        <div class="split"><div><h3>${car.name}</h3><p class="muted">${car.year} - ${car.owner}</p></div><strong>${car.distance}</strong></div>
        <div class="tags"><span class="tag">${car.city}</span><span class="tag ${status.busy ? "danger" : "good"}">${status.label} ${status.busy ? status.meta : ""}</span><span class="tag">${car.seats} мест</span>${car.features.slice(0, 4).map((item) => `<span class="tag">${item}</span>`).join("")}</div>
        <div class="card-actions">${status.busy ? `<button class="btn primary" disabled type="button"><i data-lucide="lock"></i>Занято</button>` : `<a class="btn primary" href="checkout.html?car=${car.id}"><i data-lucide="calendar-check"></i>Забронировать</a>`}<a class="btn" href="car-details.html?car=${car.id}"><i data-lucide="eye"></i>Детали</a></div>
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
    const image = selectedCarPhoto || $("#carImage").value.trim() || DEFAULT_CARS[1].image;
    const plate = normalizePlate($("#carPlate")?.value || "");
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
      image,
      imageSource: selectedCarPhoto ? "" : $("#carImage").value.trim(),
      photoCredit: selectedCarPhoto ? "Фото владельца" : "Фото по ссылке",
      features: $("#carFeatures").value.split(",").map((item) => item.trim()).filter(Boolean),
      specs: { plate: plate || "GR DEMO" },
      vehicleCheck: validatePlate(plate)
    }));
    selectedCarPhoto = "";
    persist();
    toast("Машина добавлена в каталог.");
    setTimeout(() => location.href = "cars.html", 600);
  });
}

function resizeImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Не получилось прочитать фото."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("Не получилось открыть фото."));
      image.onload = () => {
        const maxWidth = 1200;
        const scale = Math.min(1, maxWidth / image.width);
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

async function handleCarPhotoFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    toast("Выберите файл изображения.");
    return;
  }
  try {
    selectedCarPhoto = await resizeImageFile(file);
    $("#carPhotoPreview").src = selectedCarPhoto;
    $("#carPhotoPreview").hidden = false;
    $("#carPhotoNote").textContent = "Фото готово. Оно сохранится вместе с машиной.";
    $("#carImage").value = "";
  } catch (error) {
    selectedCarPhoto = "";
    toast(error.message || "Фото не загрузилось.");
  }
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
  const status = carStatus(car);
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
          <span class="tag ${status.busy ? "danger" : "good"}">${status.label} ${status.busy ? status.meta : ""}</span>
          <span class="tag">${car.seats} мест</span>
          ${car.features.map((item) => `<span class="tag">${item}</span>`).join("")}
        </div>
        <div class="detail-actions">
          ${status.busy ? `<button class="btn primary" disabled type="button"><i data-lucide="lock"></i>Занято</button>` : `<a class="btn primary" href="checkout.html?car=${car.id}"><i data-lucide="calendar-check"></i>Забронировать</a>`}
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
        <div class="line"><div><strong>Статус</strong><p>${status.busy ? status.meta : "Свободна для бронирования"}</p></div><span class="status ${status.busy ? "danger" : ""}">${status.label}</span></div>
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
  const dateInput = $("#bookingDate");
  const timeInput = $("#bookingTime");
  if (dateInput && !dateInput.value) {
    dateInput.value = localDateValue();
    dateInput.min = localDateValue();
  }
  if (timeInput && !timeInput.value) timeInput.value = localTimeValue();
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
  const range = selectedBookingRange();
  const duration = Number($("#duration").value);
  const minutes = duration >= 1440 ? 2880 : duration;
  const multiplier = duration >= 1440 ? 0.42 : 1;
  const discount = car.trust >= 95 ? 0.92 : car.trust >= 90 ? 0.96 : 1;
  const total = Math.round(car.rate * minutes * multiplier * discount);
  if ($("#total")) $("#total").textContent = money(total);
  if ($("#deposit")) $("#deposit").textContent = `Депозит demo: ${money(car.trust >= 95 ? 10000 : 18000)}`;
  const status = $("#bookingStatus");
  const summary = $("#timeSummary");
  const payBtn = $("#payBtn");
  if (!status || !summary || !payBtn) return;
  if (!range) {
    status.textContent = "Выберите дату и время.";
    status.className = "availability";
    summary.textContent = "";
    payBtn.disabled = true;
    return;
  }
  summary.textContent = `Период брони: ${formatDateTime(range.start)} - ${formatDateTime(range.end)}`;
  const inPast = range.start.getTime() < Date.now() - 60000;
  const conflict = hasBookingConflict(car.id, range.start, range.end);
  payBtn.disabled = inPast || conflict;
  status.className = `availability ${inPast || conflict ? "busy" : "free"}`;
  if (inPast) {
    status.textContent = "Это время уже прошло. Выберите другое время.";
  } else if (conflict) {
    status.textContent = "Занято на это время. Выберите другой слот.";
  } else {
    status.textContent = "Свободно. Можно бронировать.";
  }
}

function payBooking() {
  requireUser(() => {
    if (!isRenterVerified()) {
      toast("Сначала пройдите demo-проверку арендатора в кабинете.");
      setTimeout(() => location.href = "dashboard.html", 900);
      return;
    }
    const car = checkoutCar();
    const duration = $("#duration");
    const range = selectedBookingRange();
    if (!range) return toast("Укажите дату и время брони.");
    if (range.start.getTime() < Date.now() - 60000) return toast("Выберите будущее время.");
    if (hasBookingConflict(car.id, range.start, range.end)) return toast("Эта машина уже занята на выбранное время.");
    const total = Number($("#total").textContent.replace(/[^0-9]/g, "")) || 0;
    state.bookings.unshift({
      id: `booking-${Date.now()}`,
      carId: car.id,
      userId: state.user.id,
      total,
      method: $("#method").value,
      duration: duration.options[duration.selectedIndex].text,
      date: new Date().toLocaleDateString("ru-KZ"),
      startAt: range.start.toISOString(),
      endAt: range.end.toISOString(),
      status: "active"
    });
    persist();
    toast(`Оплата прошла. ${car.name} забронирована.`);
    setTimeout(() => location.href = "dashboard.html", 700);
  });
}

function line(title, text, status, action = "") {
  return `<div class="line"><div><strong>${title}</strong><p>${text}</p></div><div class="line-actions"><span class="status">${status}</span>${action}</div></div>`;
}

function removeBooking(id) {
  requireUser(() => {
    const booking = state.bookings.find((item) => item.id === id);
    if (!booking) return;
    const car = state.cars.find((item) => item.id === booking.carId);
    if (booking.userId !== state.user.id && car?.ownerId !== state.user.id) {
      toast("Можно удалить только свою бронь.");
      return;
    }
    state.bookings = state.bookings.filter((item) => item.id !== id);
    persist();
    renderDashboard();
    toast("Бронь удалена. Машина снова свободна.");
  });
}

function removeCar(id) {
  requireUser(() => {
    const car = state.cars.find((item) => item.id === id);
    if (!car) return;
    if (car.ownerId !== state.user.id) {
      toast("Можно удалить только свою машину.");
      return;
    }
    state.cars = state.cars.filter((item) => item.id !== id);
    state.bookings = state.bookings.filter((booking) => booking.carId !== id);
    persist();
    renderDashboard();
    toast("Машина и связанные брони удалены.");
  });
}

function verificationBadge(result, fallback = "Не проверено") {
  if (!result) return `<span class="status danger">${fallback}</span>`;
  return `<span class="status ${result.ok ? "" : "danger"}">${result.ok ? "Проверено" : "Ошибка"}</span>`;
}

function verificationLine(title, result, fallback) {
  return `<div class="line"><div><strong>${title}</strong><p>${result?.text || fallback}</p></div><div class="line-actions">${verificationBadge(result)}</div></div>`;
}

function renderVerification() {
  const node = $("#verificationPanel");
  if (!node) return;
  if (!state.user) {
    node.innerHTML = `<div class="empty">Войдите, чтобы пройти demo-проверку арендатора и автомобиля.</div>`;
    return;
  }

  const verification = userVerification() || {};
  node.innerHTML = `
    <form class="verification-form" id="verificationForm">
      <div class="form-grid">
        <label class="field"><span>ИИН арендатора</span><input id="verifyIin" inputmode="numeric" maxlength="12" value="${verification.iin || ""}" placeholder="990101123456" /></label>
        <label class="field"><span>№ удостоверения личности</span><input id="verifyIdCard" inputmode="numeric" value="${verification.idCardNumber || ""}" placeholder="123456789" /></label>
        <label class="field"><span>№ водительского удостоверения</span><input id="verifyLicense" value="${verification.licenseNumber || ""}" placeholder="DL123456" /></label>
        <label class="field"><span>Госномер авто</span><input id="verifyPlate" value="${verification.plateNumber || ""}" placeholder="777ABC02" /></label>
      </div>
      <div class="verification-actions">
        <button class="btn primary" type="submit"><i data-lucide="shield-check"></i>Проверить demo</button>
        <span class="muted">Данные сохраняются только в браузере. Реальная проверка требует согласия пользователя и KYC/API.</span>
      </div>
    </form>
    <div class="verification-grid">
      ${verificationLine("Личность арендатора", verification.identity, "ИИН еще не проверен")}
      ${verificationLine("Удостоверение личности", verification.idCard, "Документ еще не проверен")}
      ${verificationLine("Водительские права", verification.driver, "Водитель еще не проверен")}
      ${verificationLine("Госномер авто", verification.plate, "Авто еще не проверено")}
    </div>
  `;
  $("#verificationForm").onsubmit = runVerification;
  if (window.lucide) lucide.createIcons();
}

function runVerification(event) {
  event.preventDefault();
  requireUser(() => {
    const iin = $("#verifyIin").value.trim();
    const idCardNumber = $("#verifyIdCard").value.trim();
    const licenseNumber = $("#verifyLicense").value.trim();
    const plateNumber = normalizePlate($("#verifyPlate").value);
    const result = {
      iin,
      idCardNumber,
      licenseNumber,
      plateNumber,
      identity: validateIin(iin),
      idCard: validateIdCard(idCardNumber),
      driver: validateDriverLicense(licenseNumber),
      plate: validatePlate(plateNumber),
      checkedAt: new Date().toISOString()
    };
    state.verifications[state.user.id] = result;
    state.user.verified = result.identity.ok && result.idCard.ok && result.driver.ok;
    persist();
    renderDashboard();
    toast(result.identity.ok && result.idCard.ok && result.driver.ok ? "Арендатор прошел demo-проверку." : "Проверьте поля проверки.");
  });
}

function renderDashboard() {
  const userId = state.user?.id || "guest";
  const name = state.user?.name || "Гость";
  const renterVerified = isRenterVerified(userId);
  $("#profileName").textContent = name;
  $("#profileMeta").textContent = state.user ? `${state.user.contact} - ${roleLabel(state.user.role)} - ${renterVerified ? "арендатор проверен" : "нужна проверка"}` : "Войдите, чтобы начать";
  $("#avatar").textContent = (name[0] || "G").toUpperCase();
  $("#profileLogin").innerHTML = state.user ? `<i data-lucide="log-out"></i>Выйти` : `<i data-lucide="log-in"></i>Войти в demo`;

  const myBookings = state.bookings.filter((booking) => booking.userId === userId);
  const myCars = state.cars.filter((car) => car.ownerId === userId);
  const ownerBookings = state.bookings.filter((booking) => myCars.some((car) => car.id === booking.carId));
  const gross = ownerBookings.reduce((sum, booking) => sum + booking.total, 0);
  const fee = Math.round(gross * 0.2);
  const payout = gross - fee;

  $("#bookingList").innerHTML = myBookings.length
    ? myBookings.map((booking) => {
        const car = state.cars.find((item) => item.id === booking.carId);
        return line(
          car?.name || "Авто",
          `${formatBookingPeriod(booking)} - ${booking.duration} - ${booking.method}`,
          money(booking.total),
          `<button class="btn danger compact-btn" data-remove-booking="${booking.id}" type="button"><i data-lucide="trash-2"></i>Удалить</button>`
        );
      }).join("")
    : `<div class="empty">Броней пока нет.</div>`;

  $("#ownerList").innerHTML = myCars.length
    ? myCars.map((car) => {
        const status = carStatus(car);
        const vehicleVerified = isCarPlateVerified(car, userId);
        return line(
          car.name,
          `${car.city} - ${car.rate}₸/мин - ${car.specs?.plate || "госномер не указан"} - ${status.busy ? status.meta : `Trust ${car.trust}`}`,
          vehicleVerified ? "Авто проверено" : status.label,
          `<button class="btn danger compact-btn" data-remove-car="${car.id}" type="button"><i data-lucide="trash-2"></i>Удалить</button>`
        );
      }).join("")
    : `<div class="empty">У вас пока нет авто.</div>`;

  $("#walletList").innerHTML =
    line("Баланс владельца", "Доход от оплаченных demo-броней", money(payout)) +
    line("Комиссия GhostRide", "20% с заказов", money(fee)) +
    `<div class="line"><div><strong>Demo Card •••• 7777</strong><p>Карта для выплат подключена</p></div><button class="btn" id="payoutBtn" type="button">Выплата</button></div>`;
  $("#payoutBtn")?.addEventListener("click", () => toast("Demo-выплата создана."));
  renderVerification();
  if (window.lucide) lucide.createIcons();
}

function initPage() {
  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "cars") renderCarsPage();
  if (page === "owners") {
    renderCalculator();
    $("#ownerForm").onsubmit = addCar;
    if ($("#carGallery")) $("#carGallery").onchange = handleCarPhotoFile;
    if ($("#carCamera")) $("#carCamera").onchange = handleCarPhotoFile;
  }
  if (page === "car-details") renderCarDetails();
  if (page === "checkout") {
    renderCheckout();
    if ($("#duration")) $("#duration").onchange = updateTotal;
    if ($("#bookingDate")) $("#bookingDate").onchange = updateTotal;
    if ($("#bookingTime")) $("#bookingTime").onchange = updateTotal;
    if ($("#payBtn")) $("#payBtn").onclick = payBooking;
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
  const removeBookingBtn = event.target.closest("[data-remove-booking]");
  const removeCarBtn = event.target.closest("[data-remove-car]");
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
  if (removeBookingBtn) removeBooking(removeBookingBtn.dataset.removeBooking);
  if (removeCarBtn) removeCar(removeCarBtn.dataset.removeCar);
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
