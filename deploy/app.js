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
      <div class="modal registration-modal">
        <div class="modal-head">
          <div><h2>Регистрация в GhostRide</h2><p>Создайте demo-аккаунт и сразу пройдите проверку арендатора.</p></div>
          <button class="btn" data-auth-close type="button"><i data-lucide="x"></i></button>
        </div>
        <div class="modal-body registration-grid">
          <label class="field">Имя<input id="authName" value="Асхат" /></label>
          <label class="field">Телефон или email<input id="authContact" value="+7 700 000 00 00" /></label>
          <label class="field">Роль<select id="authRole"><option value="renter">Арендатор</option><option value="owner">Владелец</option><option value="both">Арендатор и владелец</option></select></label>
          <label class="field">ИИН<input id="authIin" inputmode="numeric" maxlength="12" placeholder="990101123456" /></label>
          <label class="field">№ удостоверения<input id="authIdCard" inputmode="numeric" placeholder="123456789" /></label>
          <label class="field">№ водительских прав<input id="authLicense" placeholder="DL123456" /></label>
          <label class="field wide">Госномер авто для владельца<input id="authPlate" placeholder="777ABC02" /></label>
          <div class="availability wide"><strong>Demo-проверка:</strong> данные не отправляются в госорганы, а проверяются только по формату и сохраняются в браузере.</div>
        </div>
        <div class="modal-actions">
          <button class="btn" data-auth-close type="button">Отмена</button>
          <button class="btn primary" id="authSubmit" type="button"><i data-lucide="check"></i>Зарегистрироваться</button>
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
    toast("Сначала зарегистрируйтесь в demo-аккаунте.");
    return false;
  }
  callback?.();
  return true;
}

function registerAccount() {
  const oldUser = read("gr_user", null);
  const role = $("#authRole").value;
  const iin = $("#authIin").value.trim();
  const idCardNumber = $("#authIdCard").value.trim();
  const licenseNumber = $("#authLicense").value.trim();
  const plateNumber = normalizePlate($("#authPlate").value.trim());
  const identity = validateIin(iin);
  const idCard = validateIdCard(idCardNumber);
  const driver = validateDriverLicense(licenseNumber);
  const plate = plateNumber ? validatePlate(plateNumber) : { ok: role === "renter", text: role === "renter" ? "Госномер не нужен для арендатора" : "Введите госномер авто владельца" };
  const failed = [identity, idCard, driver, plate].find((item) => !item.ok);
  if (failed) {
    toast(failed.text);
    return;
  }

  state.user = {
    id: oldUser?.id || `user-${Date.now()}`,
    name: $("#authName").value.trim() || "Demo User",
    contact: $("#authContact").value.trim(),
    role,
    iin,
    idCardNumber,
    licenseNumber,
    plateNumber,
    verified: true,
    registeredAt: new Date().toISOString()
  };
  state.verifications[state.user.id] = {
    iin,
    idCardNumber,
    licenseNumber,
    plateNumber,
    identity,
    idCard,
    driver,
    plate,
    checkedAt: new Date().toISOString()
  };
  persist();
  closeAuth();
  renderShell();
  initPage();
  toast(`Регистрация готова, ${state.user.name}. Demo-проверка пройдена.`);
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
  $$("[data-auth-label]").forEach((node) => node.textContent = state.user ? state.user.name : "Регистрация");
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
  $("#profileMeta").textContent = state.user ? `${state.user.contact} - ${roleLabel(state.user.role)} - ${renterVerified ? "арендатор проверен" : "нужна проверка"}` : "Зарегистрируйтесь, чтобы начать";
  $("#avatar").textContent = (name[0] || "G").toUpperCase();
  $("#profileLogin").innerHTML = state.user ? `<i data-lucide="log-out"></i>Выйти` : `<i data-lucide="user-plus"></i>Регистрация`;

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

window.addEventListener("ghostride-toast", (event) => {
  toast(event.detail || "Demo-действие выполнено.");
});

document.addEventListener("input", (event) => {
  if (["hours", "rate", "fee"].includes(event.target.id)) renderCalculator();
});

injectAuth();
document.addEventListener("click", (event) => {
  if (event.target.id === "authSubmit") registerAccount();
  if (event.target.id === "profileLogin") state.user ? logout() : openAuth();
});
renderShell();
initPage();

;(() => {
  setTimeout(() => {
  const SUPABASE_CDN = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
  const backendConfig = window.GHOSTRIDE_BACKEND || {};
  const backend = {
    client: null,
    enabled: Boolean(backendConfig.supabaseUrl && backendConfig.supabaseAnonKey),
    ready: false,
    syncing: false,
    status: backendConfig.supabaseUrl && backendConfig.supabaseAnonKey ? "Подключение" : "Local demo",
    timer: null
  };
  window.ghostrideBackend = {
    get client() { return backend.client; },
    isReady: () => backend.ready,
    isConfigured: backendConfigured,
    status: () => backend.status
  };

  const backendPersistLocal = persist;
  const backendRenderShell = renderShell;
  const backendRemoveCar = removeCar;
  const backendRemoveBooking = removeBooking;

  function backendConfigured() {
    return Boolean(
      backendConfig.supabaseUrl &&
      backendConfig.supabaseAnonKey &&
      !backendConfig.supabaseUrl.includes("your-project") &&
      !backendConfig.supabaseAnonKey.includes("YOUR_")
    );
  }

  function loadBackendScript(src) {
    return new Promise((resolve, reject) => {
      if (window.supabase?.createClient) {
        resolve();
        return;
      }
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function renderBackendStatus() {
    const actions = $(".top-actions");
    if (!actions) return;
    let node = $("#backendStatus");
    if (!node) {
      node = document.createElement("span");
      node.id = "backendStatus";
      node.className = "backend-status";
      actions.insertBefore(node, actions.firstChild);
    }
    node.className = `backend-status ${backend.ready ? "online" : backend.status === "Ошибка backend" ? "error" : ""}`;
    node.textContent = backend.ready ? "Backend online" : backend.status;
  }

  renderShell = function() {
    backendRenderShell();
    renderBackendStatus();
  };

  function compactUser(user) {
    return {
      id: user.id,
      name: user.name,
      contact: user.contact || "",
      role: user.role || "renter",
      verified: Boolean(user.verified),
      registered_at: user.registeredAt || user.registered_at || new Date().toISOString(),
      data: user
    };
  }

  function compactCar(car) {
    return {
      id: car.id,
      owner_id: car.ownerId || car.owner_id || "",
      owner_name: car.owner || car.owner_name || "",
      name: car.name,
      year: Number(car.year || 0),
      city: car.city || "",
      mode: car.mode || "city",
      rate: Number(car.rate || 0),
      trust: Number(car.trust || 90),
      distance: car.distance || "",
      seats: Number(car.seats || 5),
      image: car.image || "",
      image_source: car.imageSource || "",
      photo_credit: car.photoCredit || "",
      features: car.features || [],
      specs: car.specs || {},
      rules: car.rules || [],
      included: car.included || [],
      schedule: car.schedule || {},
      coords: car.coords || {},
      availability_status: car.availabilityStatus || "active",
      vehicle_check: car.vehicleCheck || {},
      data: car
    };
  }

  function compactBooking(booking) {
    return {
      id: booking.id,
      car_id: booking.carId,
      user_id: booking.userId,
      total: Number(booking.total || 0),
      rent_total: Number(booking.rentTotal || 0),
      service_fee: Number(booking.serviceFee || 0),
      deposit: Number(booking.deposit || 0),
      method: booking.method || "",
      duration: booking.duration || "",
      status: booking.status || "active",
      date_text: booking.date || "",
      start_at: booking.startAt || null,
      end_at: booking.endAt || null,
      data: booking
    };
  }

  function compactReview(review) {
    return {
      id: review.id,
      car_id: review.carId,
      author: review.author || "Гость",
      rating: Number(review.rating || 5),
      text: review.text || "",
      date_text: review.date || ""
    };
  }

  function compactVerification(userId, verification) {
    return {
      user_id: userId,
      iin: verification.iin || "",
      id_card_number: verification.idCardNumber || "",
      license_number: verification.licenseNumber || "",
      plate_number: verification.plateNumber || "",
      identity: verification.identity || {},
      id_card: verification.idCard || {},
      driver: verification.driver || {},
      plate: verification.plate || {},
      documents: verification.documents || {},
      doc_check: verification.docCheck || {},
      checked_at: verification.checkedAt || null
    };
  }

  function compactFine(fine) {
    return {
      id: fine.id,
      booking_id: fine.bookingId || "",
      car_id: fine.carId || "",
      owner_id: fine.ownerId || "",
      user_id: fine.userId || "",
      amount: Number(fine.amount || 0),
      reason: fine.reason || "",
      status: fine.status || "charged",
      date_text: fine.date || ""
    };
  }

  function rowToUser(row) {
    const data = row.data || {};
    return {
      ...data,
      id: row.id,
      name: row.name,
      contact: row.contact,
      role: row.role,
      verified: row.verified,
      registeredAt: row.registered_at || data.registeredAt
    };
  }

  function rowToCar(row) {
    return normalizeCar({
      ...(row.data || {}),
      id: row.id,
      ownerId: row.owner_id,
      owner: row.owner_name || row.data?.owner,
      name: row.name,
      year: row.year,
      city: row.city,
      mode: row.mode,
      rate: row.rate,
      trust: row.trust,
      distance: row.distance,
      seats: row.seats,
      image: row.image,
      imageSource: row.image_source,
      photoCredit: row.photo_credit,
      features: row.features || [],
      specs: row.specs || {},
      rules: row.rules || [],
      included: row.included || [],
      schedule: row.schedule || {},
      coords: row.coords || {},
      availabilityStatus: row.availability_status || "active",
      vehicleCheck: row.vehicle_check || {}
    });
  }

  function rowToBooking(row) {
    return {
      ...(row.data || {}),
      id: row.id,
      carId: row.car_id,
      userId: row.user_id,
      total: row.total,
      rentTotal: row.rent_total,
      serviceFee: row.service_fee,
      deposit: row.deposit,
      method: row.method,
      duration: row.duration,
      status: row.status,
      date: row.date_text,
      startAt: row.start_at,
      endAt: row.end_at
    };
  }

  function rowToReview(row) {
    return {
      id: row.id,
      carId: row.car_id,
      author: row.author,
      rating: row.rating,
      text: row.text,
      date: row.date_text || new Date(row.created_at).toLocaleDateString("ru-KZ")
    };
  }

  function rowToVerification(row) {
    return {
      iin: row.iin || "",
      idCardNumber: row.id_card_number || "",
      licenseNumber: row.license_number || "",
      plateNumber: row.plate_number || "",
      identity: row.identity || {},
      idCard: row.id_card || {},
      driver: row.driver || {},
      plate: row.plate || {},
      documents: row.documents || {},
      docCheck: row.doc_check || {},
      checkedAt: row.checked_at
    };
  }

  function rowToFine(row) {
    return {
      id: row.id,
      bookingId: row.booking_id,
      carId: row.car_id,
      ownerId: row.owner_id,
      userId: row.user_id,
      amount: row.amount,
      reason: row.reason,
      status: row.status,
      date: row.date_text
    };
  }

  function applySupabaseUser(authUser) {
    if (!authUser) return;
    const metadata = authUser.user_metadata || {};
    const contact = authUser.email || authUser.phone || metadata.email || metadata.phone || "";
    const user = {
      id: authUser.id,
      name: metadata.name || metadata.full_name || metadata.user_name || contact || "GhostRide User",
      contact,
      role: metadata.role || "renter",
      provider: authUser.app_metadata?.provider || "supabase",
      verified: Boolean(authUser.email_confirmed_at || authUser.phone_confirmed_at || authUser.confirmed_at),
      registeredAt: authUser.created_at || new Date().toISOString()
    };
    state.user = user;
    state.users = [user, ...state.users.filter((item) => item.id !== user.id)];
    backendPersistLocal();
  }

  async function restoreAuthSession() {
    if (!backend.client?.auth) return;
    const { data } = await backend.client.auth.getSession();
    if (data?.session?.user) applySupabaseUser(data.session.user);
    backend.client.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        applySupabaseUser(session.user);
        renderShell();
        initPage();
        scheduleBackendPush();
      }
    });
  }

  async function selectTable(table, columns = "*") {
    const { data, error } = await backend.client.from(table).select(columns);
    if (error) throw error;
    return data || [];
  }

  async function upsertTable(table, rows, onConflict = "id") {
    if (!rows.length) return;
    const { error } = await backend.client.from(table).upsert(rows, { onConflict });
    if (error) throw error;
  }

  async function deleteBackendRow(table, idColumn, id) {
    if (!backend.ready || !id) return;
    const { error } = await backend.client.from(table).delete().eq(idColumn, id);
    if (error) console.warn("GhostRide backend delete error", table, error.message);
  }

  async function pullBackend() {
    const [users, cars, bookings, reviews, verifications, fines] = await Promise.all([
      selectTable("gr_users"),
      selectTable("gr_cars"),
      selectTable("gr_bookings"),
      selectTable("gr_reviews"),
      selectTable("gr_verifications"),
      selectTable("gr_fines")
    ]);

    if (users.length) state.users = users.map(rowToUser);
    if (cars.length) state.cars = cars.map(rowToCar);
    if (bookings.length) state.bookings = bookings.map(rowToBooking);
    if (reviews.length) state.reviews = reviews.map(rowToReview);
    if (fines.length) state.fines = fines.map(rowToFine);
    if (verifications.length) {
      state.verifications = Object.fromEntries(verifications.map((row) => [row.user_id, rowToVerification(row)]));
    }
    if (state.user) {
      const freshUser = state.users.find((user) => user.id === state.user.id);
      if (freshUser) state.user = freshUser;
    }
    backendPersistLocal();
  }

  async function pushBackend() {
    if (!backend.ready || backend.syncing) return;
    backend.syncing = true;
    try {
      const users = [...state.users];
      if (state.user && !users.some((user) => user.id === state.user.id)) users.unshift(state.user);
      await upsertTable("gr_users", users.map(compactUser));
      await upsertTable("gr_cars", state.cars.map(compactCar));
      await upsertTable("gr_bookings", state.bookings.map(compactBooking));
      await upsertTable("gr_reviews", state.reviews.map(compactReview));
      await upsertTable("gr_fines", state.fines.map(compactFine));
      await upsertTable("gr_verifications", Object.entries(state.verifications).map(([userId, verification]) => compactVerification(userId, verification)), "user_id");
      backend.status = "Backend online";
      renderBackendStatus();
    } catch (error) {
      backend.status = "Ошибка backend";
      renderBackendStatus();
      console.warn("GhostRide backend sync error", error.message);
    } finally {
      backend.syncing = false;
    }
  }

  function scheduleBackendPush() {
    if (!backend.ready) return;
    clearTimeout(backend.timer);
    backend.timer = setTimeout(pushBackend, 700);
  }

  persist = function() {
    backendPersistLocal();
    scheduleBackendPush();
  };

  removeCar = function(id) {
    backendRemoveCar(id);
    deleteBackendRow("gr_cars", "id", id);
    state.bookings.filter((booking) => booking.carId === id).forEach((booking) => deleteBackendRow("gr_bookings", "id", booking.id));
  };

  removeBooking = function(id) {
    backendRemoveBooking(id);
    deleteBackendRow("gr_bookings", "id", id);
  };

  async function initBackend() {
    if (!backendConfigured()) {
      backend.status = "Local demo";
      renderBackendStatus();
      return;
    }
    try {
      await loadBackendScript(SUPABASE_CDN);
      backend.client = window.supabase.createClient(backendConfig.supabaseUrl, backendConfig.supabaseAnonKey);
      await restoreAuthSession();
      await pullBackend();
      backend.ready = true;
      backend.status = "Backend online";
      renderShell();
      initPage();
      if (!state.cars.length) {
        state.cars = DEFAULT_CARS.map(normalizeCar);
        persist();
      } else {
        scheduleBackendPush();
      }
      toast("Backend Supabase подключен.");
    } catch (error) {
      backend.ready = false;
      backend.status = "Ошибка backend";
      renderBackendStatus();
      console.warn("GhostRide backend init error", error.message);
      toast("Backend не подключился. Сайт работает как local demo.");
    }
  }

  document.addEventListener("click", (event) => {
    const reviewRemove = event.target.closest("[data-remove-review]");
    const bookingRemove = event.target.closest("[data-admin-remove-booking]");
    if (reviewRemove) deleteBackendRow("gr_reviews", "id", reviewRemove.dataset.removeReview);
    if (bookingRemove) deleteBackendRow("gr_bookings", "id", bookingRemove.dataset.adminRemoveBooking);
  });

  setTimeout(initBackend, 0);
  renderShell();
  }, 0);
})();

;(() => {
  const CITY_GEO = {
    "Алматы": { lat: 43.2389, lng: 76.8897 },
    "Астана": { lat: 51.1605, lng: 71.4704 },
    "Шымкент": { lat: 42.3417, lng: 69.5901 },
    "Актобе": { lat: 50.2839, lng: 57.167 },
    "Уральск": { lat: 51.2278, lng: 51.3865 },
    "Атырау": { lat: 47.0945, lng: 51.9238 },
    "Караганда": { lat: 49.8047, lng: 73.1094 }
  };

  const LANG_COPY = {
    ru: { cars: "Автомобили", how: "Как работает", tariffs: "Тарифы", owners: "Владельцам", business: "Бизнес", faq: "FAQ", dashboard: "Кабинет", admin: "Админ", register: "Регистрация", login: "Войти", logout: "Выйти", start: "Начать", rentOut: "Сдать авто", catalog: "Каталог" },
    kz: { cars: "Көліктер", how: "Қалай жұмыс істейді", tariffs: "Тарифтер", owners: "Иелерге", business: "Бизнес", faq: "FAQ", dashboard: "Кабинет", admin: "Админ", register: "Тіркелу", login: "Кіру", logout: "Шығу", start: "Бастау", rentOut: "Көлік қосу", catalog: "Каталог" },
    en: { cars: "Cars", how: "How it works", tariffs: "Tariffs", owners: "Owners", business: "Business", faq: "FAQ", dashboard: "Dashboard", admin: "Admin", register: "Sign up", login: "Log in", logout: "Log out", start: "Start", rentOut: "List car", catalog: "Catalog" }
  };

  const I18N_ENTRIES = [
    ["Автомобили", "Көліктер", "Cars"],
    ["Как работает", "Қалай жұмыс істейді", "How it works"],
    ["Тарифы", "Тарифтер", "Tariffs"],
    ["Кабинет", "Кабинет", "Dashboard"],
    ["Админ", "Админ", "Admin"],
    ["Войти", "Кіру", "Log in"],
    ["Выйти", "Шығу", "Log out"],
    ["Начать", "Бастау", "Start"],
    ["Народный каршеринг Казахстана", "Қазақстанның халықтық каршерингі", "People-powered car sharing in Kazakhstan"],
    ["Машина должна зарабатывать", "Көлік табыс әкелуі керек", "A car should earn money"],
    ["P2P каршеринг с входом, каталогом авто, добавлением своей машины, demo-бронью, demo-оплатой, выплатами владельцу и AI Trust Score.", "Кіру, автокаталог, өз көлігіңді қосу, demo-бронь, demo-төлем, иесіне төлем және AI Trust Score бар P2P каршеринг.", "P2P car sharing with sign-in, car catalog, owner listings, demo booking, demo payment, owner payouts, and AI Trust Score."],
    ["Найти машину", "Көлік табу", "Find a car"],
    ["Найти авто", "Көлік табу", "Find a car"],
    ["Сдать авто", "Көлік тапсыру", "List a car"],
    ["авто в каталоге", "каталогтағы көлік", "cars in catalog"],
    ["demo-броней", "demo-броньдар", "demo bookings"],
    ["комиссия", "комиссия", "commission"],
    ["Ближайшая машина", "Ең жақын көлік", "Nearest car"],
    ["Как сервис", "Сервис қалай жұмыс істейді", "Service flow"],
    ["Несколько страниц и полный demo-путь", "Бірнеше бет және толық demo жолы", "Multi-page demo journey"],
    ["Вход", "Кіру", "Login"],
    ["Demo-аккаунт сохраняется в браузере.", "Demo-аккаунт браузерде сақталады.", "The demo account is saved in the browser."],
    ["Добавление авто", "Көлік қосу", "Add a car"],
    ["Владелец добавляет машину в каталог.", "Иесі көлікті каталогқа қосады.", "The owner adds a car to the catalog."],
    ["Demo-оплата", "Demo-төлем", "Demo payment"],
    ["Бронь создает чек и баланс владельца.", "Бронь чек пен иесінің балансын жасайды.", "A booking creates a receipt and owner balance."],
    ["Выплаты", "Төлемдер", "Payouts"],
    ["Кабинет считает доход и комиссию.", "Кабинет табыс пен комиссияны есептейді.", "The dashboard calculates income and commission."],
    ["Сценарий аренды", "Жалға алу сценарийі", "Rental flow"],
    ["От регистрации до завершения поездки", "Тіркелуден сапарды аяқтауға дейін", "From registration to trip completion"],
    ["Логика как у современного каршеринга: регистрация, проверка, карта, бронь, осмотр, поездка, возврат в разрешенной зоне.", "Қазіргі каршеринг логикасы: тіркелу, тексеру, карта, бронь, қарау, сапар, рұқсат етілген аймақта қайтару.", "A modern car-sharing flow: registration, verification, map, booking, inspection, trip, and return in an allowed zone."],
    ["Регистрация", "Тіркелу", "Sign up"],
    ["Телефон/email, пароль или Google/Apple. Для аренды нужны ИИН, удостоверение и права.", "Телефон/email, пароль немесе Google/Apple. Жалға алу үшін ЖСН, жеке куәлік және жүргізуші куәлігі керек.", "Phone/email, password, or Google/Apple. IIN, ID, and license are required for rental."],
    ["Проверка", "Тексеру", "Verification"],
    ["Demo KYC проверяет формат документов, а реальный запуск подключает гос/API-проверки.", "Demo KYC құжат форматын тексереді, ал нақты іске қосуда мемлекеттік/API тексерулер қосылады.", "Demo KYC checks document format; production connects official/API checks."],
    ["Карта авто", "Көлік картасы", "Car map"],
    ["Пользователь видит ближайшие машины, статус, депозит, тариф, Trust Score и зону завершения.", "Пайдаланушы жақын көліктерді, статусын, депозитін, тарифін, Trust Score және аяқтау аймағын көреді.", "Users see nearby cars, status, deposit, tariff, Trust Score, and finish zone."],
    ["Бронь", "Бронь", "Booking"],
    ["Выбор даты, времени и длительности. Если слот занят, сайт покажет другой доступный период.", "Күнді, уақытты және ұзақтығын таңдау. Слот бос болмаса, сайт басқа уақытты көрсетеді.", "Choose date, time, and duration. If busy, the site suggests another slot."],
    ["Осмотр", "Қарау", "Inspection"],
    ["Перед поездкой водитель фиксирует фото кузова и салона, чтобы защитить себя и владельца.", "Сапар алдында жүргізуші өзін және иесін қорғау үшін кузов пен салонды фотоға түсіреді.", "Before the trip, the driver captures exterior and interior photos."],
    ["Поездка", "Сапар", "Trip"],
    ["AI Trust Score учитывает скорость, торможения, пунктуальность и штрафы.", "AI Trust Score жылдамдықты, тежеуді, уақытылы келуді және айыптарды ескереді.", "AI Trust Score tracks speed, braking, punctuality, and fines."],
    ["Заправка/зарядка", "Жанармай/қуаттау", "Fuel/charging"],
    ["Если топлива мало, водитель заправляет по инструкции и получает demo-бонус или компенсацию.", "Жанармай аз болса, жүргізуші нұсқаулық бойынша толтырып, demo-бонус немесе өтемақы алады.", "If fuel is low, the driver follows instructions and receives a demo bonus or reimbursement."],
    ["Завершение", "Аяқтау", "Finish"],
    ["Машину оставляют в разрешенной зоне, закрывают через приложение и получают чек.", "Көлік рұқсат етілген аймақта қалдырылып, қосымша арқылы жабылады және чек беріледі.", "Leave the car in an allowed zone, lock it in the app, and receive a receipt."],
    ["Перед поездкой", "Сапар алдында", "Before the trip"],
    ["Чек-лист водителя", "Жүргізуші чек-парағы", "Driver checklist"],
    ["Документы", "Құжаттар", "Documents"],
    ["Аккаунт и права проверены, возраст и стаж подходят под правила авто.", "Аккаунт пен құқықтар тексерілген, жас пен өтіл көлік ережелеріне сай.", "Account and license are verified, age and experience fit the car rules."],
    ["Фотофиксация", "Фотофиксация", "Photo capture"],
    ["Сделаны фото кузова, салона, уровня топлива или заряда.", "Кузов, салон, жанармай немесе заряд деңгейі фотоға түсірілді.", "Exterior, interior, fuel, or charge level photos are captured."],
    ["Страховка", "Сақтандыру", "Insurance"],
    ["Пользователь видит условия страхования и размер ответственности.", "Пайдаланушы сақтандыру шарттары мен жауапкершілік мөлшерін көреді.", "The user sees insurance terms and liability amount."],
    ["Зона", "Аймақ", "Zone"],
    ["Маршрут и точка завершения находятся в разрешенной зоне GhostRide.", "Маршрут пен аяқтау нүктесі GhostRide рұқсат еткен аймақта.", "Route and finish point are inside the GhostRide allowed zone."],
    ["Минуты, часы, выходные и корпоративные поездки", "Минуттар, сағаттар, демалыс және корпоративтік сапарлар", "Minutes, hours, weekends, and corporate trips"],
    ["GhostRide считает аренду прозрачно: ставка владельца, сервисный сбор, депозит, лимит пробега и возможные штрафы видны до оплаты.", "GhostRide жалға алуды ашық есептейді: иесінің бағасы, сервис ақысы, депозит, жүріс лимиті және ықтимал айыптар төлемге дейін көрінеді.", "GhostRide prices transparently: owner rate, service fee, deposit, mileage limit, and possible fines are visible before payment."],
    ["15-60 минут", "15-60 минут", "15-60 minutes"],
    ["от 80₸/мин", "80₸/мин бастап", "from 80₸/min"],
    ["Короткие поездки по городу, встречи, дела, университет, офис.", "Қала ішіндегі қысқа сапарлар, кездесулер, шаруалар, университет, офис.", "Short city trips, meetings, errands, university, office."],
    ["Выбрать авто", "Көлік таңдау", "Choose a car"],
    ["1-6 часов", "1-6 сағат", "1-6 hours"],
    ["скидка до 12%", "12%-ға дейін жеңілдік", "up to 12% off"],
    ["Подходит для нескольких дел подряд, семейных поездок и аэропорта.", "Бірнеше іс, отбасылық сапарлар және әуежай үшін ыңғайлы.", "Good for multiple errands, family trips, and airport rides."],
    ["Посмотреть", "Көру", "View"],
    ["2 дня", "2 күн", "2 days"],
    ["пакетный тариф", "пакеттік тариф", "package rate"],
    ["Выходные за городом, поездка в область, гости, свадьба.", "Қала сыртындағы демалыс, облысқа сапар, қонақтар, той.", "Weekend out of town, regional trip, guests, wedding."],
    ["Забронировать", "Брондау", "Book"],
    ["Что входит", "Не кіреді", "What is included"],
    ["Включено в тариф", "Тарифке кіреді", "Included in the tariff"],
    ["Страхование по demo-сценарию", "Demo сценарийі бойынша сақтандыру", "Insurance in the demo scenario"],
    ["GPS и телематика", "GPS және телематика", "GPS and telematics"],
    ["Поддержка и история поездки", "Қолдау және сапар тарихы", "Support and trip history"],
    ["Фотофиксация до и после аренды", "Жалға алудан бұрын және кейін фотофиксация", "Photo capture before and after rental"],
    ["Дополнительно", "Қосымша", "Extra"],
    ["Депозит и штрафы", "Депозит және айыптар", "Deposit and fines"],
    ["Депозит", "Депозит", "Deposit"],
    ["Блокируется на время поездки и возвращается после осмотра.", "Сапар кезінде бұғатталып, қараудан кейін қайтарылады.", "Blocked during the trip and returned after inspection."],
    ["от 10 000₸", "10 000₸ бастап", "from 10,000₸"],
    ["Опоздание", "Кешігу", "Late return"],
    ["Начисляется, если водитель не продлил бронь.", "Жүргізуші броньды ұзартпаса есептеледі.", "Charged if the driver does not extend the booking."],
    ["Пробег", "Жүріс", "Mileage"],
    ["Пакет может включать лимит, сверх лимита считается отдельно.", "Пакетте лимит болуы мүмкін, лимиттен асса бөлек есептеледі.", "A package may include a limit; extra mileage is counted separately."],
    ["Вопрос-ответ", "Сұрақ-жауап", "Questions and answers"],
    ["Частые вопросы", "Жиі сұрақтар", "Frequently asked questions"],
    ["Ответы для арендаторов, владельцев авто и будущих корпоративных клиентов.", "Жалға алушыларға, көлік иелеріне және болашақ корпоративтік клиенттерге жауаптар.", "Answers for renters, car owners, and future corporate clients."],
    ["Можно ли реально войти через Google и Apple?", "Google және Apple арқылы шынымен кіруге бола ма?", "Can users really log in with Google and Apple?"],
    ["Да, после подключения Supabase Auth и включения провайдеров Google/Apple. Сейчас кнопки уже готовы в интерфейсе.", "Иә, Supabase Auth қосылып, Google/Apple провайдерлері іске қосылғаннан кейін. Қазір батырмалар интерфейсте дайын.", "Yes, after Supabase Auth is connected and Google/Apple providers are enabled. The buttons are already in the UI."],
    ["Где хранятся машины и брони?", "Көліктер мен броньдар қайда сақталады?", "Where are cars and bookings stored?"],
    ["Без Supabase данные сохраняются в браузере. После подключения Supabase они синхронизируются в общей базе.", "Supabase жоқ болса, деректер браузерде сақталады. Supabase қосылғаннан кейін ортақ базаға синхрондалады.", "Without Supabase, data is saved in the browser. After connection, it syncs to the shared database."],
    ["Кто отвечает за машину?", "Көлікке кім жауап береді?", "Who is responsible for the car?"],
    ["В demo-версии ответственность показывается через депозит, штрафы и правила. Для реального запуска нужны договор, страхование и проверка документов.", "Demo-нұсқада жауапкершілік депозит, айыптар және ережелер арқылы көрсетіледі. Нақты іске қосу үшін келісім, сақтандыру және құжат тексеру керек.", "In the demo, responsibility is shown through deposit, fines, and rules. Production needs contract, insurance, and document checks."],
    ["Как владелец получает деньги?", "Иесі ақшаны қалай алады?", "How does the owner get paid?"],
    ["Кабинет считает доход, комиссию GhostRide и demo-выплаты. Реальные выплаты подключаются через платежного провайдера или банк.", "Кабинет табысты, GhostRide комиссиясын және demo-төлемдерді есептейді. Нақты төлемдер төлем провайдері немесе банк арқылы қосылады.", "The dashboard calculates income, GhostRide commission, and demo payouts. Real payouts connect through a payment provider or bank."],
    ["Что делать, если топливо закончилось?", "Жанармай бітсе не істеу керек?", "What if fuel runs out?"],
    ["Водитель заправляет по инструкции, фиксирует чек и получает компенсацию или бонус. Для электромобиля аналогично работает зарядка.", "Жүргізуші нұсқаулық бойынша жанармай құяды, чекті тіркейді және өтемақы немесе бонус алады. Электромобильде зарядтау осылай жұмыс істейді.", "The driver refuels by instructions, uploads a receipt, and gets reimbursement or a bonus. EV charging works similarly."],
    ["Можно ли завершить поездку где угодно?", "Сапарды кез келген жерде аяқтауға бола ма?", "Can a trip be finished anywhere?"],
    ["Нет. Поездка завершается только в разрешенной зоне, чтобы следующему пользователю было удобно найти авто.", "Жоқ. Келесі пайдаланушыға ыңғайлы болу үшін сапар тек рұқсат етілген аймақта аяқталады.", "No. Trips finish only in an allowed zone so the next user can find the car easily."],
    ["Что такое AI Trust Score?", "AI Trust Score деген не?", "What is AI Trust Score?"],
    ["Это оценка надежности пользователя и авто: стиль езды, скорость, торможения, пунктуальность, отзывы и штрафы.", "Бұл пайдаланушы мен көліктің сенімділік бағасы: жүргізу стилі, жылдамдық, тежеу, уақыттылық, пікірлер және айыптар.", "It is a reliability score for user and car: driving style, speed, braking, punctuality, reviews, and fines."],
    ["Корпоративный доступ к народному автопарку", "Халықтық автопаркке корпоративтік қолжетімділік", "Corporate access to the people-powered fleet"],
    ["Для компаний, курьеров, торговых представителей и команд, которым нужен транспорт без покупки автопарка.", "Автопарк сатып алмай көлік керек компанияларға, курьерлерге, сауда өкілдеріне және командаларға.", "For companies, couriers, sales reps, and teams that need transport without buying a fleet."],
    ["Команды", "Командалар", "Teams"],
    ["Несколько сотрудников в одном корпоративном аккаунте.", "Бір корпоративтік аккаунтта бірнеше қызметкер.", "Multiple employees under one corporate account."],
    ["Закрывающие документы", "Есеп құжаттары", "Closing documents"],
    ["Единый отчет по поездкам, депозитам, штрафам и сервисному сбору.", "Сапарлар, депозиттер, айыптар және сервис ақысы бойынша бірыңғай есеп.", "One report for trips, deposits, fines, and service fees."],
    ["Лимиты", "Лимиттер", "Limits"],
    ["Настройка городов, времени, классов авто и бюджетов.", "Қалаларды, уақытты, көлік класстарын және бюджеттерді баптау.", "Configure cities, time windows, car classes, and budgets."],
    ["Отдельные сценарии для доставки, курьеров и выездных мастеров.", "Жеткізу, курьерлер және көшпелі мамандар үшін бөлек сценарийлер.", "Dedicated scenarios for delivery, couriers, and mobile specialists."],
    ["Заявка для компании", "Компанияға өтінім", "Company request"],
    ["Компания", "Компания", "Company"],
    ["Город", "Қала", "City"],
    ["Сотрудников", "Қызметкерлер", "Employees"],
    ["Контакт", "Байланыс", "Contact"],
    ["Отправить demo-заявку", "Demo-өтінім жіберу", "Send demo request"],
    ["Правила", "Ережелер", "Rules"],
    ["Зоны, страховка, ответственность", "Аймақтар, сақтандыру, жауапкершілік", "Zones, insurance, responsibility"],
    ["Страница для будущего договора, правил аренды, страховых сценариев и прозрачных штрафов.", "Болашақ келісім, жалға алу ережелері, сақтандыру сценарийлері және ашық айыптар беті.", "A page for future contract, rental rules, insurance scenarios, and transparent fines."],
    ["Зоны", "Аймақтар", "Zones"],
    ["Старт и завершение доступны только в разрешенных зонах. Выезд за пределы города зависит от режима авто.", "Бастау және аяқтау тек рұқсат етілген аймақтарда. Қаладан шығу көлік режиміне байланысты.", "Start and finish are available only in allowed zones. Leaving the city depends on the car mode."],
    ["Перед реальным запуском подключается страховой партнер, лимиты ответственности и порядок ДТП.", "Нақты іске қосу алдында сақтандыру серіктесі, жауапкершілік лимиттері және ЖКО тәртібі қосылады.", "Before launch, an insurance partner, liability limits, and accident workflow are connected."],
    ["Заправка", "Жанармай құю", "Refueling"],
    ["Если топливо ниже лимита, водитель заправляет авто и загружает чек. Компенсация проходит после проверки.", "Жанармай лимиттен төмен болса, жүргізуші көлікті толтырып, чек жүктейді. Өтемақы тексеруден кейін өтеді.", "If fuel is below the limit, the driver refuels and uploads a receipt. Reimbursement happens after review."],
    ["Штрафы", "Айыптар", "Fines"],
    ["Курение, грязный салон, опоздание, повреждения и нарушение зоны фиксируются актом и фото.", "Темекі шегу, лас салон, кешігу, зақым және аймақ бұзу акт пен фото арқылы тіркеледі.", "Smoking, dirty interior, late return, damage, and zone violations are recorded with a report and photos."],
    ["Бонусы за друзей и активность", "Достар мен белсенділік үшін бонустар", "Bonuses for referrals and activity"],
    ["Промокоды, реферальные бонусы, скидки для аккуратных водителей и приоритет для владельцев.", "Промокодтар, реферал бонустары, ұқыпты жүргізушілерге жеңілдіктер және иелерге басымдық.", "Promo codes, referral bonuses, discounts for careful drivers, and priority for owners."],
    ["Для арендатора", "Жалға алушыға", "For renters"],
    ["Первый заезд", "Алғашқы сапар", "First trip"],
    ["Demo-промокод для первой поездки после проверки документов.", "Құжат тексеруден кейінгі алғашқы сапарға demo-промокод.", "Demo promo code for the first trip after document verification."],
    ["Реферал", "Реферал", "Referral"],
    ["Приведи друга", "Досыңды шақыр", "Invite a friend"],
    ["бонусы обоим", "екеуіне де бонус", "bonuses for both"],
    ["Друг получает скидку, вы получаете бонус после его первой поездки.", "Досыңыз жеңілдік алады, сіз оның алғашқы сапарынан кейін бонус аласыз.", "Your friend gets a discount, you get a bonus after their first trip."],
    ["Для владельца", "Иесіне", "For owners"],
    ["Приоритет", "Басымдық", "Priority"],
    ["Проверенные авто с высоким рейтингом показываются выше в каталоге.", "Жоғары рейтингі бар тексерілген көліктер каталогта жоғары көрсетіледі.", "Verified high-rated cars appear higher in the catalog."],
    ["Каталог", "Каталог", "Catalog"],
    ["Каталог demo-авто.", "Demo-авто каталогы.", "Demo car catalog."],
    ["Авто рядом", "Жақын көліктер", "Cars nearby"],
    ["Фильтруйте машины по городу и режиму аренды, затем переходите к demo-бронированию и оплате.", "Көліктерді қала және жалға алу режимі бойынша сүзгіден өткізіп, demo-бронь мен төлемге өтіңіз.", "Filter cars by city and rental mode, then go to demo booking and payment."],
    ["Владельцам", "Иелерге", "For owners"],
    ["Добавьте авто и принимайте оплату", "Көлік қосып, төлем қабылдаңыз", "Add a car and accept payments"],
    ["В demo-версии машина сразу попадает в каталог, а оплаченные брони отображаются в кабинете владельца.", "Demo-нұсқада көлік бірден каталогқа түседі, ал төленген броньдар иесінің кабинетінде көрінеді.", "In the demo, the car goes straight to the catalog and paid bookings appear in the owner dashboard."],
    ["Калькулятор дохода", "Табыс калькуляторы", "Income calculator"],
    ["Добавить машину", "Көлік қосу", "Add a car"],
    ["Личный кабинет", "Жеке кабинет", "Personal dashboard"],
    ["Брони, авто и выплаты", "Броньдар, көліктер және төлемдер", "Bookings, cars, and payouts"],
    ["Брони, авто, документы, календарь, Trust Score и выплаты сохраняются на устройстве через localStorage.", "Броньдар, көліктер, құжаттар, күнтізбе, Trust Score және төлемдер құрылғыда localStorage арқылы сақталады.", "Bookings, cars, documents, calendar, Trust Score, and payouts are saved on-device via localStorage."],
    ["Мои брони", "Менің броньдарым", "My bookings"],
    ["Мои авто", "Менің көліктерім", "My cars"],
    ["Календарь владельца", "Иесінің күнтізбесі", "Owner calendar"],
    ["Проверка арендатора и авто", "Жалға алушы мен көлікті тексеру", "Renter and car verification"],
    ["Оплата и выплаты", "Төлем және төлемдер", "Payment and payouts"],
    ["Панель управления", "Басқару панелі", "Admin panel"],
    ["Модерация машин, броней, документов, отзывов, штрафов и статусов. Это demo без настоящего сервера.", "Көліктерді, броньдарды, құжаттарды, пікірлерді, айыптарды және статустарды модерациялау. Бұл нақты сервері жоқ demo.", "Moderation for cars, bookings, documents, reviews, fines, and statuses. This is a demo without a real server."],
    ["Войти в GhostRide", "GhostRide-қа кіру", "Log in to GhostRide"],
    ["Создайте аккаунт через Google, Apple/iCloud, телефон или email.", "Google, Apple/iCloud, телефон немесе email арқылы аккаунт жасаңыз.", "Create an account with Google, Apple/iCloud, phone, or email."],
    ["или заполните данные вручную", "немесе деректерді қолмен толтырыңыз", "or fill in manually"],
    ["Имя", "Аты", "Name"],
    ["Телефон или email", "Телефон немесе email", "Phone or email"],
    ["Телефон / email", "Телефон нөмірі / email", "Phone number / email address"],
    ["Пароль", "Құпиясөз", "Password"],
    ["минимум 6 символов", "кемінде 6 таңба", "at least 6 characters"],
    ["Показать пароль", "Құпиясөзді көрсету", "Show password"],
    ["Роль", "Рөл", "Role"],
    ["ИИН", "ЖСН", "IIN"],
    ["ИИН арендатора", "Жалға алушы ЖСН", "Renter IIN"],
    ["№ удостоверения", "Жеке куәлік №", "ID card no."],
    ["№ удостоверения личности", "Жеке куәлік №", "ID card no."],
    ["№ водительских прав", "Жүргізуші куәлігі №", "Driver license no."],
    ["№ водительского удостоверения", "Жүргізуші куәлігі №", "Driver license no."],
    ["Госномер авто для владельца", "Иесі үшін көлік нөмірі", "Owner car plate"],
    ["Госномер авто", "Көлік нөмірі", "Car plate"],
    ["Напишите отзыв о машине", "Көлік туралы пікір жазыңыз", "Write a review about the car"],
    ["Арендатор", "Жалға алушы", "Renter"],
    ["Владелец", "Иесі", "Owner"],
    ["Арендатор и владелец", "Жалға алушы және иесі", "Renter and owner"],
    ["Закрыть", "Жабу", "Close"],
    ["Зарегистрироваться", "Тіркелу", "Sign up"],
    ["Уже есть аккаунт", "Аккаунт бар", "Already have an account"],
    ["Забыли пароль?", "Құпиясөзді ұмыттыңыз ба?", "Forgot password?"],
    ["Регистрация", "Тіркелу", "Sign up"],
    ["Войти", "Кіру", "Log in"],
    ["Войти через Google", "Google арқылы кіру", "Log in with Google"],
    ["Войти через Apple", "Apple арқылы кіру", "Login with Apple"],
    ["Отправить код", "Код жіберу", "Send code"],
    ["Подтвердить код", "Кодты растау", "Confirm code"],
    ["Можно также войти по 6-значному коду.", "6 таңбалы кодпен де кіруге болады.", "You can also log in with a 6-digit code."],
    ["Регистрируясь или входя, вы соглашаетесь с документами GhostRide", "Тіркелу немесе кіру арқылы GhostRide шарттарына келісесіз", "By signing up or logging in, you consent to GhostRide's"],
    ["и", "және", "and"],
    ["Условия использования", "Пайдалану шарттары", "Terms of Use"],
    ["Политика конфиденциальности", "Құпиялылық саясаты", "Privacy Policy"],
    ["Свободно", "Бос", "Available"],
    ["Занято", "Бос емес", "Busy"],
    ["Пауза", "Үзіліс", "Paused"],
    ["Сервис", "Сервис", "Service"],
    ["Можно бронировать", "Брондауға болады", "Available to book"],
    ["Владелец временно снял авто с аренды", "Иесі көлікті уақытша жалға беруден алып тастады", "The owner paused this car temporarily"],
    ["Авто на обслуживании", "Көлік сервисте", "The car is in service"],
    ["Недоступно", "Қолжетімсіз", "Unavailable"],
    ["Авто недоступно", "Көлік қолжетімсіз", "The car is unavailable"],
    ["до", "дейін", "until"],
    ["бронь активна", "бронь белсенді", "booking is active"],
    ["Детали", "Толығырақ", "Details"],
    ["Удалить", "Жою", "Delete"],
    ["Проверено", "Тексерілді", "Verified"]
  ];

  const I18N_BY_LANGUAGE_TEXT = new Map();
  const I18N_BY_RU = new Map();

  I18N_ENTRIES.forEach(([ru, kz, en]) => {
    const entry = { ru, kz, en };
    I18N_BY_RU.set(ru, entry);
    [ru, kz, en].forEach((value) => {
      if (value) I18N_BY_LANGUAGE_TEXT.set(String(value).trim(), entry);
    });
  });

  const PAGE_TITLES = {
    home: { ru: "GhostRide Kazakhstan", kz: "GhostRide Kazakhstan", en: "GhostRide Kazakhstan" },
    cars: { ru: "Автомобили - GhostRide", kz: "Көліктер - GhostRide", en: "Cars - GhostRide" },
    how: { ru: "Как работает - GhostRide", kz: "Қалай жұмыс істейді - GhostRide", en: "How it works - GhostRide" },
    tariffs: { ru: "Тарифы - GhostRide", kz: "Тарифтер - GhostRide", en: "Tariffs - GhostRide" },
    faq: { ru: "FAQ - GhostRide", kz: "FAQ - GhostRide", en: "FAQ - GhostRide" },
    business: { ru: "Бизнес - GhostRide", kz: "Бизнес - GhostRide", en: "Business - GhostRide" },
    rules: { ru: "Правила - GhostRide", kz: "Ережелер - GhostRide", en: "Rules - GhostRide" },
    promo: { ru: "Промо - GhostRide", kz: "Промо - GhostRide", en: "Promo - GhostRide" },
    owners: { ru: "Владельцам - GhostRide", kz: "Иелерге - GhostRide", en: "Owners - GhostRide" },
    checkout: { ru: "Бронирование - GhostRide", kz: "Брондау - GhostRide", en: "Booking - GhostRide" },
    dashboard: { ru: "Кабинет - GhostRide", kz: "Кабинет - GhostRide", en: "Dashboard - GhostRide" },
    "car-details": { ru: "Детали авто - GhostRide", kz: "Көлік мәліметтері - GhostRide", en: "Car details - GhostRide" },
    admin: { ru: "Админ - GhostRide", kz: "Админ - GhostRide", en: "Admin - GhostRide" }
  };

  function translatedEntryValue(entry) {
    return entry?.[state.language] || entry?.ru || "";
  }

  function translateValue(value) {
    const raw = String(value ?? "");
    const trimmed = raw.trim();
    if (!trimmed) return raw;
    const entry = I18N_BY_LANGUAGE_TEXT.get(trimmed);
    if (!entry) return raw;
    return raw.replace(trimmed, translatedEntryValue(entry));
  }

  function translateTextNode(node) {
    const translated = translateValue(node.nodeValue);
    if (translated !== node.nodeValue) node.nodeValue = translated;
  }

  function translateAttributes(root = document.body) {
    root.querySelectorAll("input[placeholder], textarea[placeholder], [title], [aria-label]").forEach((node) => {
      ["placeholder", "title", "aria-label"].forEach((attr) => {
        const value = node.getAttribute(attr);
        if (!value) return;
        const translated = translateValue(value);
        if (translated !== value) node.setAttribute(attr, translated);
      });
    });
  }

  function translateText(root = document.body) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
        if (parent.closest("svg")) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateTextNode);
    translateAttributes(root);
    const title = PAGE_TITLES[document.body.dataset.page];
    if (title) document.title = title[state.language] || title.ru;
  }

  let i18nObserver = null;

  function observeLanguageChanges() {
    if (i18nObserver || !document.body || !window.MutationObserver) return;
    i18nObserver = new MutationObserver((mutations) => {
      const roots = [];
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) roots.push(node);
          if (node.nodeType === Node.TEXT_NODE && node.parentElement) roots.push(node.parentElement);
        });
      });
      roots.forEach((root) => translateText(root));
    });
    i18nObserver.observe(document.body, { childList: true, subtree: true });
  }

  const CAR_STATUS = {
    active: { label: "Свободно", meta: "Можно бронировать" },
    paused: { label: "Пауза", meta: "Владелец временно снял авто с аренды" },
    service: { label: "Сервис", meta: "Авто на обслуживании" }
  };

  const DEFAULT_REVIEWS = [
    { id: "review-1", carId: "car-1", author: "Аружан", rating: 5, text: "Машина чистая, открыть через приложение получилось сразу.", date: "27.05.2026" },
    { id: "review-2", carId: "car-2", author: "Нурлан", rating: 5, text: "Camry отлично подошла для встречи в городе.", date: "26.05.2026" },
    { id: "review-3", carId: "car-4", author: "Самат", rating: 4, text: "Для доставки удобно, заряд держался нормально.", date: "25.05.2026" }
  ];

  const docPhotos = {};
  const basePersist = persist;
  const baseNormalizeCar = normalizeCar;
  const baseRenderShell = renderShell;
  const baseOpenAuth = openAuth;

  state.users = read("gr_users", []);
  state.reviews = read("gr_reviews", DEFAULT_REVIEWS);
  state.fines = read("gr_fines", []);
  state.language = read("gr_lang", "ru");

  $("#authModal")?.remove();

  function authContactKind(value) {
    const contact = String(value || "").trim();
    if (!contact) return "";
    if (contact.includes("@")) return "email";
    return "phone";
  }

  function findUserByContact(contact) {
    const normalized = String(contact || "").trim().toLowerCase();
    return state.users.find((user) => String(user.contact || "").trim().toLowerCase() === normalized)
      || (String(state.user?.contact || "").trim().toLowerCase() === normalized ? state.user : null);
  }

  function loginOtpKey(contact) {
    return `gr_login_otp_${String(contact || "").trim().toLowerCase()}`;
  }

  function demoOtpCode() {
    return String(Math.floor(100000 + Math.random() * 900000));
  }

  function saveSignedUser(user, message = "Вы вошли в аккаунт.") {
    state.user = user;
    state.users = [user, ...state.users.filter((item) => item.id !== user.id)];
    persist();
    closeAuth();
    closeLogin();
    renderShell();
    initPage();
    toast(message);
  }

  function createSocialDemoAccount(provider) {
    const providerLabel = provider === "apple" ? "Apple iCloud" : provider === "google" ? "Google" : "Соцсеть";
    const user = {
      id: `user-${provider}-${Date.now()}`,
      name: `${providerLabel} User`,
      contact: `${provider}-${Date.now()}@ghostride.demo`,
      role: "renter",
      provider,
      verified: false,
      registeredAt: new Date().toISOString()
    };
    saveSignedUser(user, `${providerLabel}: demo-регистрация готова. Для брони пройдите проверку документов.`);
  }

  async function socialAuth(provider) {
    const backendApi = window.ghostrideBackend;
    if (backendApi?.isReady?.() && backendApi.client?.auth) {
      const { error } = await backendApi.client.auth.signInWithOAuth({
        provider,
        options: { redirectTo: location.href }
      });
      if (error) {
        toast(error.message || "Социальный вход не запустился.");
        return;
      }
      toast(provider === "apple" ? "Откроется вход через Apple/iCloud." : "Откроется вход через Google.");
      return;
    }
    createSocialDemoAccount(provider);
  }

  injectAuth = function() {
    $("#authModal")?.remove();
    document.body.insertAdjacentHTML("beforeend", `
      <div class="modal-bg" id="authModal">
        <div class="modal registration-modal">
          <div class="modal-head">
            <div><h2>Регистрация в GhostRide</h2><p>Создайте аккаунт через Google, Apple/iCloud, телефон или email.</p></div>
            <button class="btn" data-auth-close type="button"><i data-lucide="x"></i></button>
          </div>
          <div class="modal-body registration-grid">
            <div class="auth-methods wide">
              <button class="btn social-btn" data-social-auth="google" type="button"><i data-lucide="chrome"></i>Google</button>
              <button class="btn social-btn" data-social-auth="apple" type="button"><i data-lucide="cloud"></i>Apple / iCloud</button>
              <button class="btn social-btn" data-focus-contact type="button"><i data-lucide="phone"></i>Телефон</button>
              <button class="btn social-btn" data-focus-contact type="button"><i data-lucide="mail"></i>Email</button>
            </div>
            <div class="auth-divider wide"><span>или заполните данные вручную</span></div>
            <label class="field">Имя<input id="authName" value="Асхат" /></label>
            <label class="field">Телефон или email<input id="authContact" value="+7 700 000 00 00" required /></label>
            <label class="field">Пароль<input id="authPassword" type="password" value="" placeholder="минимум 6 символов" /></label>
            <label class="field">Роль<select id="authRole"><option value="renter">Арендатор</option><option value="owner">Владелец</option><option value="both">Арендатор и владелец</option></select></label>
            <label class="field">ИИН<input id="authIin" inputmode="numeric" maxlength="12" placeholder="990101123456" /></label>
            <label class="field">№ удостоверения<input id="authIdCard" inputmode="numeric" placeholder="123456789" /></label>
            <label class="field">№ водительских прав<input id="authLicense" placeholder="DL123456" /></label>
            <label class="field wide">Госномер авто для владельца<input id="authPlate" placeholder="777ABC02" /></label>
            <div class="availability wide"><strong>Важно:</strong> Google/Apple подтверждают вход в аккаунт. ИИН, права и удостоверение все равно нужны перед бронированием авто.</div>
          </div>
          <div class="modal-actions">
            <button class="btn" data-login-open type="button">Уже есть аккаунт</button>
            <button class="btn primary" id="authSubmit" type="button"><i data-lucide="check"></i>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    `);
  };

  function injectLogin() {
    if ($("#loginModal")) return;
    document.body.insertAdjacentHTML("beforeend", `
      <div class="modal-bg" id="loginModal">
        <div class="modal login-modal auth-card">
          <button class="auth-close" data-login-close type="button" aria-label="Закрыть"><i data-lucide="x"></i></button>
          <div class="login-body">
            <label class="auth-pill-field">
              <input id="loginContact" autocomplete="username" placeholder="Phone number / email address" />
            </label>
            <label class="auth-pill-field password-wrap">
              <input id="loginPassword" type="password" autocomplete="current-password" placeholder="Password" />
              <button class="password-eye" id="toggleLoginPassword" type="button" aria-label="Показать пароль"><i data-lucide="eye"></i></button>
            </label>

            <p class="auth-consent">By signing up or logging in, you consent to GhostRide's <a href="#" data-info-link>Terms of Use</a> and <a href="#" data-info-link>Privacy Policy</a>.</p>

            <div class="auth-row">
              <button class="link-button" id="forgotPassword" type="button">Forgot password?</button>
              <button class="link-button" data-auth-open type="button">Sign up</button>
            </div>

            <button class="auth-login-primary" id="loginSubmit" type="button">Log in</button>

            <div class="social-login-links">
              <button data-social-auth="google" type="button">Log in with Google</button>
              <span>|</span>
              <button data-social-auth="apple" type="button">Login with Apple</button>
            </div>

            <div class="code-login-panel">
              <div class="otp-actions">
                <button class="btn" id="sendLoginCode" type="button"><i data-lucide="send"></i>Send code</button>
                <span class="muted" id="loginStatus">You can also log in with a 6-digit code.</span>
              </div>
              <div class="code-row">
                <input id="loginCode" inputmode="numeric" maxlength="6" placeholder="000000" />
                <button class="btn" id="confirmCodeLogin" type="button">Confirm code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  }

  function openLogin() {
    injectLogin();
    $("#loginModal").classList.add("open");
    document.body.classList.add("lock");
    if (window.lucide) lucide.createIcons();
  }

  function closeLogin() {
    $("#loginModal")?.classList.remove("open");
    if (!$("#authModal")?.classList.contains("open")) document.body.classList.remove("lock");
  }

  function togglePasswordVisibility() {
    const input = $("#loginPassword");
    if (!input) return;
    input.type = input.type === "password" ? "text" : "password";
  }

  async function passwordLogin() {
    const contact = $("#loginContact")?.value.trim() || "";
    const password = $("#loginPassword")?.value || "";
    if (!contact) return toast("Введите телефон или email.");
    if (!password) return toast("Введите пароль.");

    const backendApi = window.ghostrideBackend;
    if (backendApi?.isReady?.() && backendApi.client?.auth) {
      const kind = authContactKind(contact);
      const payload = kind === "email" ? { email: contact, password } : { phone: contact, password };
      const { data, error } = await backendApi.client.auth.signInWithPassword(payload);
      if (error) return toast(error.message || "Не получилось войти с паролем.");
      const user = findUserByContact(contact) || {
        id: data.user?.id || `user-${Date.now()}`,
        name: data.user?.user_metadata?.name || data.user?.user_metadata?.full_name || contact,
        contact,
        role: data.user?.user_metadata?.role || "renter",
        provider: data.user?.app_metadata?.provider || "password",
        verified: Boolean(data.user?.email_confirmed_at || data.user?.phone_confirmed_at),
        registeredAt: data.user?.created_at || new Date().toISOString()
      };
      saveSignedUser(user, "Вход с паролем подтвержден.");
      return;
    }

    const user = findUserByContact(contact);
    if (!user) return toast("Аккаунт не найден. Сначала нажмите Sign up.");
    if (!user.demoPassword) return toast("У этого demo-аккаунта нет пароля. Используйте код или зарегистрируйтесь заново.");
    if (user.demoPassword !== password) return toast("Неверный пароль.");
    saveSignedUser(user, "Вы вошли с паролем.");
  }

  async function forgotPassword() {
    const contact = $("#loginContact")?.value.trim() || "";
    if (!contact) return toast("Введите email или телефон.");
    const backendApi = window.ghostrideBackend;
    if (backendApi?.isReady?.() && backendApi.client?.auth && authContactKind(contact) === "email") {
      const { error } = await backendApi.client.auth.resetPasswordForEmail(contact, { redirectTo: location.href });
      if (error) return toast(error.message || "Не получилось отправить письмо.");
      toast("Письмо для восстановления пароля отправлено.");
      return;
    }
    await sendLoginCode();
  }

  async function sendLoginCode() {
    const contact = $("#loginContact")?.value.trim() || "";
    if (!contact) {
      toast("Введите номер телефона или email.");
      return;
    }

    const backendApi = window.ghostrideBackend;
    if (backendApi?.isReady?.() && backendApi.client?.auth) {
      const kind = authContactKind(contact);
      const payload = kind === "email"
        ? { email: contact, options: { shouldCreateUser: false, emailRedirectTo: location.href } }
        : { phone: contact, options: { shouldCreateUser: false } };
      const { error } = await backendApi.client.auth.signInWithOtp(payload);
      if (error) return toast(error.message || "Не получилось отправить код.");
      if ($("#loginStatus")) $("#loginStatus").textContent = kind === "email" ? "Код или ссылка отправлены на email." : "Код отправлен по SMS.";
      toast(kind === "email" ? "Проверьте email для входа." : "Код отправлен по SMS.");
      return;
    }

    const user = findUserByContact(contact);
    if (!user) {
      toast("Аккаунт не найден. Сначала нажмите Регистрация.");
      return;
    }
    const code = demoOtpCode();
    write(loginOtpKey(contact), { code, expiresAt: Date.now() + 5 * 60 * 1000 });
    if ($("#loginStatus")) $("#loginStatus").textContent = `Demo-код отправлен. Код действует 5 минут.`;
    toast(`Demo-код для входа: ${code}`);
  }

  async function confirmLoginCode() {
    const contact = $("#loginContact")?.value.trim() || "";
    const code = $("#loginCode")?.value.trim() || "";
    if (!contact) {
      toast("Введите номер телефона или email.");
      return;
    }
    if (!/^\d{6}$/.test(code)) {
      toast("Введите 6-значный код.");
      return;
    }

    const backendApi = window.ghostrideBackend;
    if (backendApi?.isReady?.() && backendApi.client?.auth) {
      const kind = authContactKind(contact);
      const payload = kind === "email"
        ? { email: contact, token: code, type: "email" }
        : { phone: contact, token: code, type: "sms" };
      const { data, error } = await backendApi.client.auth.verifyOtp(payload);
      if (error) return toast(error.message || "Код не подошел.");
      const user = findUserByContact(contact) || {
        id: data.user?.id || `user-${Date.now()}`,
        name: contact,
        contact,
        role: "renter",
        verified: false,
        registeredAt: new Date().toISOString()
      };
      saveSignedUser(user, "Вход через код подтвержден.");
      return;
    }

    const savedOtp = read(loginOtpKey(contact), null);
    if (!savedOtp || savedOtp.expiresAt < Date.now()) {
      toast("Код истек. Отправьте новый код.");
      return;
    }
    if (savedOtp.code !== code) {
      toast("Неверный код.");
      return;
    }
    const user = findUserByContact(contact);
    if (!user) {
      toast("Аккаунт не найден. Сначала нажмите Регистрация.");
      return;
    }
    localStorage.removeItem(loginOtpKey(contact));
    saveSignedUser(user, "Вы вошли по телефону/email.");
  }

  function safe(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]);
  }

  function hashOf(value) {
    return String(value || "ghost").split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  }

  function coordsFor(car) {
    if (car.coords) return car.coords;
    const center = CITY_GEO[car.city] || CITY_GEO["Алматы"];
    const hash = hashOf(car.id || car.name);
    return {
      lat: Number((center.lat + ((hash % 9) - 4) * 0.006).toFixed(6)),
      lng: Number((center.lng + (((hash >> 3) % 9) - 4) * 0.008).toFixed(6))
    };
  }

  function trustBreakdownFor(car) {
    const trust = Number(car.trust || 90);
    return car.trustBreakdown || {
      driving: Math.min(99, trust + 2),
      braking: Math.max(70, trust - 4),
      speed: Math.max(72, trust - 2),
      punctuality: Math.min(99, trust + 1)
    };
  }

  function finePolicyFor(car) {
    return car.finesPolicy || [
      { title: "Грязный салон", amount: 5000 },
      { title: "Опоздание возврата", amount: 3000 },
      { title: "Курение в салоне", amount: 20000 }
    ];
  }

  function enhanceCar(car) {
    const specs = car.specs || {};
    const deposit = Number(specs.deposit || car.deposit || (Number(car.rate || 100) >= 180 ? 35000 : 18000));
    const schedule = car.schedule || { days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], from: "09:00", to: "22:00" };
    return {
      ...car,
      coords: coordsFor(car),
      availabilityStatus: car.availabilityStatus || "active",
      schedule,
      trustBreakdown: trustBreakdownFor(car),
      finesPolicy: finePolicyFor(car),
      specs: {
        ...specs,
        deposit,
        available: specs.available || `${schedule.days.join(", ")} ${schedule.from}-${schedule.to}`
      }
    };
  }

  normalizeCar = function(car) {
    return enhanceCar(baseNormalizeCar(car));
  };

  state.cars = state.cars.map(enhanceCar);
  if (state.user && !state.users.some((user) => user.id === state.user.id)) {
    state.users.unshift(state.user);
  }
  persist();

  persist = function() {
    basePersist();
    write("gr_users", state.users);
    write("gr_reviews", state.reviews);
    write("gr_fines", state.fines);
    write("gr_lang", state.language);
  };
  persist();

  function languageCopy(key) {
    return (LANG_COPY[state.language] || LANG_COPY.ru)[key] || LANG_COPY.ru[key] || key;
  }

  function applyLanguage() {
    document.documentElement.lang = state.language === "kz" ? "kk" : state.language;
    $$('.nav a[href="cars.html"]').forEach((node) => node.textContent = languageCopy("cars"));
    $$('.nav a[href="how.html"]').forEach((node) => node.textContent = languageCopy("how"));
    $$('.nav a[href="tariffs.html"]').forEach((node) => node.textContent = languageCopy("tariffs"));
    $$('.nav a[href="owners.html"]').forEach((node) => node.textContent = languageCopy("owners"));
    $$('.nav a[href="business.html"]').forEach((node) => node.textContent = languageCopy("business"));
    $$('.nav a[href="faq.html"]').forEach((node) => node.textContent = languageCopy("faq"));
    $$('.nav a[href="dashboard.html"]').forEach((node) => node.textContent = languageCopy("dashboard"));
    $$('.nav a[href="admin.html"]').forEach((node) => node.textContent = languageCopy("admin"));
    $$("[data-auth-label]").forEach((node) => node.textContent = state.user ? state.user.name : languageCopy("register"));
    $$("[data-login-label]").forEach((node) => node.textContent = state.user ? languageCopy("logout") : languageCopy("login"));
    const select = $("#languageSelect");
    if (select) select.value = state.language;
    translateText();
    observeLanguageChanges();
  }

  function injectShellControls() {
    const actions = $(".top-actions");
    if (!actions) return;
    if (!$("#loginButton")) {
      const authButton = actions.querySelector("[data-auth-open]");
      const loginButton = document.createElement("button");
      loginButton.className = "btn";
      loginButton.id = "loginButton";
      loginButton.type = "button";
      loginButton.setAttribute("data-login-open", "");
      loginButton.innerHTML = `<i data-lucide="log-in"></i><span data-login-label>${languageCopy("login")}</span>`;
      if (authButton?.nextSibling) actions.insertBefore(loginButton, authButton.nextSibling);
      else actions.appendChild(loginButton);
    }
    if (!$("#languageSelect")) {
      actions.insertAdjacentHTML("afterbegin", `
        <select class="language-select" id="languageSelect" aria-label="Language">
          <option value="ru">RU</option>
          <option value="kz">KZ</option>
          <option value="en">EN</option>
        </select>
      `);
    }
  }

  renderShell = function() {
    baseRenderShell();
    injectShellControls();
    applyLanguage();
    if (window.lucide) lucide.createIcons();
  };

  carStatus = function(car) {
    const manual = car.availabilityStatus || "active";
    if (manual !== "active") {
      return { busy: true, label: translateValue(CAR_STATUS[manual]?.label || "Недоступно"), meta: translateValue(CAR_STATUS[manual]?.meta || "Авто недоступно"), locked: true };
    }
    const booking = nextBookingForCar(car.id);
    if (!booking) return { busy: false, label: translateValue(CAR_STATUS.active.label), meta: translateValue(CAR_STATUS.active.meta) };
    const range = bookingRange(booking);
    return {
      busy: true,
      label: translateValue("Занято"),
      meta: range ? `${translateValue("до")} ${formatDateTime(range.end)}` : translateValue("бронь активна")
    };
  };

  function visibleMapBounds(cars) {
    if (state.city !== "Все") {
      const center = CITY_GEO[state.city] || CITY_GEO["Алматы"];
      return { minLng: center.lng - 0.1, maxLng: center.lng + 0.1, minLat: center.lat - 0.07, maxLat: center.lat + 0.07, center };
    }
    const used = cars.map((car) => car.coords || coordsFor(car));
    if (!used.length) {
      return { minLng: 50, maxLng: 84, minLat: 40, maxLat: 56, center: { lat: 48, lng: 67 } };
    }
    return {
      minLng: Math.min(...used.map((item) => item.lng)) - 1.4,
      maxLng: Math.max(...used.map((item) => item.lng)) + 1.4,
      minLat: Math.min(...used.map((item) => item.lat)) - 0.9,
      maxLat: Math.max(...used.map((item) => item.lat)) + 0.9,
      center: used[0]
    };
  }

  function percentPosition(coords, bounds) {
    const left = ((coords.lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * 100;
    const top = (1 - ((coords.lat - bounds.minLat) / (bounds.maxLat - bounds.minLat))) * 100;
    return {
      left: Math.max(7, Math.min(93, left)),
      top: Math.max(9, Math.min(91, top))
    };
  }

  function renderMap(cars) {
    const node = $("#carsMap");
    if (!node) return;
    const bounds = visibleMapBounds(cars);
    const bbox = `${bounds.minLng}%2C${bounds.minLat}%2C${bounds.maxLng}%2C${bounds.maxLat}`;
    const pins = cars.map((car) => {
      const position = percentPosition(car.coords || coordsFor(car), bounds);
      const status = carStatus(car);
      return `
        <button class="map-car-pin ${status.busy ? "busy" : ""}" style="left:${position.left}%;top:${position.top}%" data-map-car="${car.id}" type="button">
          <strong>${safe(car.name)}</strong>
          <span>${safe(status.label)} · ${car.rate}₸/мин</span>
        </button>
      `;
    }).join("");
    node.innerHTML = `
      <iframe title="GhostRide map" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${bounds.center.lat}%2C${bounds.center.lng}"></iframe>
      <div class="map-overlay">${pins}</div>
      <div class="map-note">Карта использует OpenStreetMap. В реальном запуске сюда подключается 2GIS, Yandex Maps или Google Maps с GPS авто.</div>
    `;
  }

  carCard = function(car) {
    const status = carStatus(car);
    const breakdown = trustBreakdownFor(car);
    return `
      <article class="card ${status.busy ? "occupied" : ""}">
        <div class="pic">
          <img src="${car.image}" alt="${safe(car.name)}" />
          <span class="badge rate">${car.rate}₸/мин</span>
          <span class="badge trust">${status.busy ? safe(status.label) : `Trust ${car.trust}`}</span>
        </div>
        <div class="card-body">
          <div class="split"><div><h3>${safe(car.name)}</h3><p class="muted">${car.year} - ${safe(car.owner)}</p></div><strong>${safe(car.distance)}</strong></div>
          <div class="tags"><span class="tag">${safe(car.city)}</span><span class="tag ${status.busy ? "danger" : "good"}">${safe(status.label)} ${status.busy ? safe(status.meta) : ""}</span><span class="tag">AI ${breakdown.driving}/${breakdown.braking}</span><span class="tag">${car.seats} мест</span>${car.features.slice(0, 3).map((item) => `<span class="tag">${safe(item)}</span>`).join("")}</div>
          <div class="card-actions">${status.busy ? `<button class="btn primary" disabled type="button"><i data-lucide="lock"></i>${safe(status.label)}</button>` : `<a class="btn primary" href="checkout.html?car=${car.id}"><i data-lucide="calendar-check"></i>Забронировать</a>`}<a class="btn" href="car-details.html?car=${car.id}"><i data-lucide="eye"></i>Детали</a></div>
        </div>
      </article>
    `;
  };

  renderCarsPage = function() {
    $("#cityChips").innerHTML = CITIES.map((city) => `<button class="chip ${state.city === city ? "active" : ""}" data-city="${city}" type="button">${city}</button>`).join("");
    $("#modeChips").innerHTML = MODES.map((mode) => `<button class="chip ${state.mode === mode[0] ? "active" : ""}" data-mode="${mode[0]}" type="button">${mode[1]}</button>`).join("");
    const cars = visibleCars();
    renderMap(cars);
    $("#carsGrid").innerHTML = cars.length ? cars.map(carCard).join("") : `<div class="empty">Нет машин под выбранный фильтр. Добавьте свою машину на странице владельца.</div>`;
    if (window.lucide) lucide.createIcons();
  };

  function priceFor(car) {
    const duration = Number($("#duration")?.value || 30);
    const minutes = duration >= 1440 ? 2880 : duration;
    const multiplier = duration >= 1440 ? 0.42 : 1;
    const discount = car.trust >= 95 ? 0.92 : car.trust >= 90 ? 0.96 : 1;
    const base = Math.round(car.rate * minutes * multiplier * discount);
    const serviceFee = Math.max(300, Math.round(base * 0.05));
    const deposit = Number(car.specs?.deposit || 18000);
    return { base, serviceFee, deposit, total: base + serviceFee };
  }

  addCar = function(event) {
    event.preventDefault();
    requireUser(() => {
      const name = $("#carName").value.trim();
      if (!name) return toast("Введите название авто.");
      const image = selectedCarPhoto || $("#carImage").value.trim() || DEFAULT_CARS[1].image;
      const plate = normalizePlate($("#carPlate")?.value || "");
      const days = ($("#carDays")?.value || "Пн, Вт, Ср, Чт, Пт").split(",").map((item) => item.trim()).filter(Boolean);
      const from = $("#carFrom")?.value || "09:00";
      const to = $("#carTo")?.value || "22:00";
      const newCar = normalizeCar({
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
        availabilityStatus: $("#carStatus")?.value || "active",
        schedule: { days, from, to },
        specs: {
          plate: plate || "GR DEMO",
          deposit: Number($("#carDeposit")?.value || 18000),
          available: `${days.join(", ")} ${from}-${to}`
        },
        vehicleCheck: validatePlate(plate)
      });
      state.cars.unshift(newCar);
      selectedCarPhoto = "";
      persist();
      toast("Машина добавлена в каталог с календарем, депозитом и статусом.");
      setTimeout(() => location.href = "cars.html", 600);
    });
  };

  function trustRows(car) {
    const score = trustBreakdownFor(car);
    return [
      ["Стиль езды", score.driving],
      ["Торможения", score.braking],
      ["Скорость", score.speed],
      ["Пунктуальность", score.punctuality]
    ].map(([label, value]) => `
      <div class="trust-card">
        <div class="split"><strong>${label}</strong><span class="status">${value}/100</span></div>
        <div class="trust-bar"><span style="width:${value}%"></span></div>
      </div>
    `).join("");
  }

  function reviewsForCar(carId) {
    return state.reviews.filter((review) => review.carId === carId);
  }

  function reviewStars(rating) {
    return "★★★★★".slice(0, Number(rating || 5));
  }

  function renderReviews(car) {
    const reviews = reviewsForCar(car.id);
    return `
      <div class="review-grid">
        ${reviews.length ? reviews.map((review) => `
          <article class="review-card">
            <div class="split"><strong>${safe(review.author)}</strong><span class="stars">${reviewStars(review.rating)}</span></div>
            <p class="muted">${safe(review.text)}</p>
            <small class="muted">${safe(review.date)}</small>
          </article>
        `).join("") : `<div class="empty">Отзывов пока нет.</div>`}
      </div>
      <form class="review-form" id="reviewForm" data-review-car="${car.id}">
        <div class="form-grid">
          <label class="field"><span>Оценка</span><select id="reviewRating"><option value="5">5</option><option value="4">4</option><option value="3">3</option></select></label>
          <label class="field"><span>Имя</span><input id="reviewAuthor" value="${safe(state.user?.name || "Гость")}" /></label>
        </div>
        <textarea id="reviewText" placeholder="Напишите отзыв о машине"></textarea>
        <button class="btn primary" type="submit"><i data-lucide="star"></i>Добавить отзыв</button>
      </form>
    `;
  }

  renderCarDetails = function() {
    const car = checkoutCar();
    const specs = car.specs || {};
    const status = carStatus(car);
    const policy = finePolicyFor(car);
    $("#carDetails").innerHTML = `
      <div class="detail-layout">
        <div>
          <div class="detail-photo">
            <img src="${car.image}" alt="${safe(car.name)}" />
            <span class="badge rate">${car.rate}₸/мин</span>
            <span class="badge trust">Trust ${car.trust}</span>
          </div>
          <div class="photo-source">${safe(car.photoCredit)}${car.imageSource ? ` · <a href="${car.imageSource}" target="_blank" rel="noreferrer">источник фото</a>` : ""}</div>
        </div>

        <aside class="panel detail-summary">
          <p class="eyebrow">${safe(car.city)} · ${safe(car.mode)}</p>
          <h1>${safe(car.name)}</h1>
          <p class="lead">${safe(car.description)}</p>
          <div class="tags">
            <span class="tag">${car.year}</span>
            <span class="tag ${status.busy ? "danger" : "good"}">${safe(status.label)} ${status.busy ? safe(status.meta) : ""}</span>
            <span class="tag">${car.seats} мест</span>
            <span class="tag">Депозит ${money(specs.deposit)}</span>
            ${car.features.map((item) => `<span class="tag">${safe(item)}</span>`).join("")}
          </div>
          <div class="detail-actions">
            ${status.busy ? `<button class="btn primary" disabled type="button"><i data-lucide="lock"></i>${safe(status.label)}</button>` : `<a class="btn primary" href="checkout.html?car=${car.id}"><i data-lucide="calendar-check"></i>Забронировать</a>`}
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
          <div class="line"><div><strong>Владелец</strong><p>${safe(car.owner)}</p></div><span class="status">Проверен</span></div>
          <div class="line"><div><strong>Статус</strong><p>${safe(status.busy ? status.meta : "Свободна для бронирования")}</p></div><span class="status ${status.busy ? "danger" : ""}">${safe(status.label)}</span></div>
          <div class="line"><div><strong>Календарь</strong><p>${safe(car.schedule.days.join(", "))} · ${safe(car.schedule.from)}-${safe(car.schedule.to)}</p></div><span class="status">Online</span></div>
          <div class="line"><div><strong>Локация</strong><p>${safe(specs.location)}</p></div><span class="status">${safe(car.distance)}</span></div>
          <div class="line"><div><strong>Телематика</strong><p>${safe(specs.smartLock)}</p></div><span class="status">${safe(specs.plate)}</span></div>
        </article>

        <article class="panel detail-section">
          <div class="section-head compact"><div><p class="eyebrow">AI</p><h2>Trust Score</h2></div></div>
          <div class="trust-score"><strong>${car.trust}</strong><p class="muted">AI оценивает стиль езды, резкие торможения, скорость и пунктуальность.</p></div>
          <div class="trust-grid">${trustRows(car)}</div>
        </article>

        <article class="panel detail-section">
          <div class="section-head compact"><div><p class="eyebrow">Депозит</p><h2>Штрафы demo</h2></div></div>
          ${line("Блокировка депозита", "Депозит не списывается, а блокируется на время аренды", money(specs.deposit))}
          ${policy.map((item) => line(item.title, "Начисляется только после demo-акта", money(item.amount))).join("")}
        </article>

        <article class="panel detail-section">
          <div class="section-head compact"><div><p class="eyebrow">Включено</p><h2>Что получает арендатор</h2></div></div>
          <div class="check-list">${car.included.map((item) => `<div><i data-lucide="check"></i><span>${safe(item)}</span></div>`).join("")}</div>
        </article>

        <article class="panel detail-section">
          <div class="section-head compact"><div><p class="eyebrow">Правила</p><h2>Перед поездкой</h2></div></div>
          <div class="check-list">${car.rules.map((item) => `<div><i data-lucide="shield-check"></i><span>${safe(item)}</span></div>`).join("")}</div>
        </article>

        <article class="panel detail-section wide">
          <div class="section-head compact"><div><p class="eyebrow">Отзывы</p><h2>Рейтинг машины</h2></div></div>
          ${renderReviews(car)}
        </article>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
  };

  renderCheckout = function() {
    const car = checkoutCar();
    const dateInput = $("#bookingDate");
    const timeInput = $("#bookingTime");
    if (dateInput && !dateInput.value) {
      dateInput.value = localDateValue();
      dateInput.min = localDateValue();
    }
    if (timeInput && !timeInput.value) timeInput.value = localTimeValue();
    $("#checkoutCar").innerHTML = `
      <div class="checkout-photo"><img src="${car.image}" alt="${safe(car.name)}" /></div>
      <div class="payment-card">
        <p>Выбранное авто</p>
        <h2>${safe(car.name)}</h2>
        <div class="tags"><span class="tag">${safe(car.city)}</span><span class="tag">${car.rate}₸/мин</span><span class="tag">Trust ${car.trust}</span><span class="tag">Депозит ${money(car.specs?.deposit || 18000)}</span></div>
      </div>
      <div style="margin-top:16px" class="grid">
        <div class="line"><div><strong>Владелец</strong><p>${safe(car.owner)}</p></div><span class="status">Проверен</span></div>
        <div class="line"><div><strong>Календарь</strong><p>${safe(car.schedule.days.join(", "))} ${safe(car.schedule.from)}-${safe(car.schedule.to)}</p></div><span class="status">${safe(carStatus(car).label)}</span></div>
      </div>
      <a style="margin-top:16px" class="btn full" href="car-details.html?car=${car.id}"><i data-lucide="eye"></i>Открыть детали машины</a>
    `;
    updateTotal();
  };

  updateTotal = function() {
    const car = checkoutCar();
    const range = selectedBookingRange();
    const price = priceFor(car);
    if ($("#total")) $("#total").textContent = money(price.total);
    if ($("#deposit")) $("#deposit").textContent = `Аренда ${money(price.base)} + сервис ${money(price.serviceFee)}. Депозит блокируется отдельно: ${money(price.deposit)}`;
    if ($("#finePolicy")) {
      $("#finePolicy").innerHTML = `<strong>Депозит/штрафы:</strong> ${money(price.deposit)} блокируется до возврата. Demo-штрафы: ${finePolicyFor(car).map((item) => `${item.title} ${money(item.amount)}`).join(", ")}.`;
    }
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
    const carAvailability = carStatus(car);
    const inPast = range.start.getTime() < Date.now() - 60000;
    const conflict = hasBookingConflict(car.id, range.start, range.end);
    payBtn.disabled = inPast || conflict || carAvailability.locked;
    status.className = `availability ${inPast || conflict || carAvailability.locked ? "busy" : "free"}`;
    if (carAvailability.locked) {
      status.textContent = `${carAvailability.label}: ${carAvailability.meta}`;
    } else if (inPast) {
      status.textContent = "Это время уже прошло. Выберите другое время.";
    } else if (conflict) {
      status.textContent = "Занято на это время. Выберите другой слот.";
    } else {
      status.textContent = "Свободно. Можно бронировать.";
    }
  };

  payBooking = function() {
    requireUser(() => {
      if (!isRenterVerified()) {
        toast("Сначала пройдите demo-проверку арендатора в кабинете.");
        setTimeout(() => location.href = "dashboard.html", 900);
        return;
      }
      const car = checkoutCar();
      const availability = carStatus(car);
      if (availability.locked) return toast("Эта машина сейчас недоступна для брони.");
      const duration = $("#duration");
      const range = selectedBookingRange();
      if (!range) return toast("Укажите дату и время брони.");
      if (range.start.getTime() < Date.now() - 60000) return toast("Выберите будущее время.");
      if (hasBookingConflict(car.id, range.start, range.end)) return toast("Эта машина уже занята на выбранное время.");
      const price = priceFor(car);
      state.bookings.unshift({
        id: `booking-${Date.now()}`,
        carId: car.id,
        userId: state.user.id,
        total: price.total,
        rentTotal: price.base,
        serviceFee: price.serviceFee,
        deposit: price.deposit,
        method: $("#method").value,
        duration: duration.options[duration.selectedIndex].text,
        date: new Date().toLocaleDateString("ru-KZ"),
        startAt: range.start.toISOString(),
        endAt: range.end.toISOString(),
        status: "active"
      });
      persist();
      toast(`Оплата прошла. ${car.name} забронирована, депозит ${money(price.deposit)} заблокирован.`);
      setTimeout(() => location.href = "dashboard.html", 700);
    });
  };

  function documentUpload(kind, label, src) {
    return `
      <div class="doc-upload">
        <strong>${label}</strong>
        ${src ? `<img src="${src}" alt="${label}" />` : `<div class="empty">Фото не загружено</div>`}
        <input class="hidden-input" id="verifyDoc-${kind}" data-doc-kind="${kind}" type="file" accept="image/*" capture="environment" />
        <label class="btn" for="verifyDoc-${kind}"><i data-lucide="camera"></i>Загрузить</label>
      </div>
    `;
  }

  async function handleVerificationPhoto(event) {
    const input = event.target.closest("[data-doc-kind]");
    const file = input?.files?.[0];
    if (!input || !file) return;
    if (!file.type.startsWith("image/")) return toast("Выберите фото документа.");
    try {
      docPhotos[input.dataset.docKind] = await resizeImageFile(file);
      renderVerification();
      toast("Фото документа добавлено.");
    } catch (error) {
      toast(error.message || "Фото не загрузилось.");
    }
  }

  renderVerification = function() {
    const node = $("#verificationPanel");
    if (!node) return;
    if (!state.user) {
      node.innerHTML = `<div class="empty">Зарегистрируйтесь, чтобы пройти demo-проверку арендатора, документов и автомобиля.</div>`;
      return;
    }

    const verification = userVerification() || {};
    const documents = { ...(verification.documents || {}), ...docPhotos };
    node.innerHTML = `
      <form class="verification-form" id="verificationForm">
        <div class="form-grid">
          <label class="field"><span>ИИН арендатора</span><input id="verifyIin" inputmode="numeric" maxlength="12" value="${safe(verification.iin || "")}" placeholder="990101123456" /></label>
          <label class="field"><span>№ удостоверения личности</span><input id="verifyIdCard" inputmode="numeric" value="${safe(verification.idCardNumber || "")}" placeholder="123456789" /></label>
          <label class="field"><span>№ водительского удостоверения</span><input id="verifyLicense" value="${safe(verification.licenseNumber || "")}" placeholder="DL123456" /></label>
          <label class="field"><span>Госномер авто</span><input id="verifyPlate" value="${safe(verification.plateNumber || "")}" placeholder="777ABC02" /></label>
        </div>
        <div class="doc-grid">
          ${documentUpload("id", "Фото удостоверения", documents.id)}
          ${documentUpload("license", "Фото прав", documents.license)}
          ${documentUpload("selfie", "Селфи с документом", documents.selfie)}
        </div>
        <div class="verification-actions">
          <button class="btn primary" type="submit"><i data-lucide="shield-check"></i>Проверить demo</button>
          <span class="muted">Фото и документы сохраняются только в браузере. Для реального запуска нужен backend, согласие пользователя и KYC/API.</span>
        </div>
      </form>
      <div class="verification-grid">
        ${verificationLine("Личность арендатора", verification.identity, "ИИН еще не проверен")}
        ${verificationLine("Удостоверение личности", verification.idCard, "Документ еще не проверен")}
        ${verificationLine("Водительские права", verification.driver, "Водитель еще не проверен")}
        ${verificationLine("Госномер авто", verification.plate, "Авто еще не проверено")}
        ${verificationLine("Фото документов", verification.docCheck, "Фото документов еще не загружены")}
      </div>
    `;
    $("#verificationForm").onsubmit = runVerification;
    $$("[data-doc-kind]").forEach((input) => input.onchange = handleVerificationPhoto);
    if (window.lucide) lucide.createIcons();
  };

  runVerification = function(event) {
    event.preventDefault();
    requireUser(() => {
      const previous = userVerification() || {};
      const documents = { ...(previous.documents || {}), ...docPhotos };
      const iin = $("#verifyIin").value.trim();
      const idCardNumber = $("#verifyIdCard").value.trim();
      const licenseNumber = $("#verifyLicense").value.trim();
      const plateNumber = normalizePlate($("#verifyPlate").value);
      const result = {
        iin,
        idCardNumber,
        licenseNumber,
        plateNumber,
        documents,
        identity: validateIin(iin),
        idCard: validateIdCard(idCardNumber),
        driver: validateDriverLicense(licenseNumber),
        plate: validatePlate(plateNumber),
        docCheck: {
          ok: Boolean(documents.id && documents.license && documents.selfie),
          text: documents.id && documents.license && documents.selfie ? "Фото документов загружены" : "Загрузите удостоверение, права и селфи"
        },
        checkedAt: new Date().toISOString()
      };
      state.verifications[state.user.id] = result;
      state.user.verified = result.identity.ok && result.idCard.ok && result.driver.ok;
      state.users = [state.user, ...state.users.filter((user) => user.id !== state.user.id)];
      persist();
      renderDashboard();
      toast(result.identity.ok && result.idCard.ok && result.driver.ok ? "Арендатор прошел demo-проверку." : "Проверьте поля проверки.");
    });
  };

  registerAccount = async function() {
    const oldUser = read("gr_user", null);
    const role = $("#authRole").value;
    const contact = $("#authContact").value.trim();
    const password = $("#authPassword")?.value || "";
    if (!contact) {
      toast("Для регистрации укажите телефон или email.");
      return;
    }
    if (password && password.length < 6) {
      toast("Пароль должен быть минимум 6 символов.");
      return;
    }
    const iin = $("#authIin").value.trim();
    const idCardNumber = $("#authIdCard").value.trim();
    const licenseNumber = $("#authLicense").value.trim();
    const plateNumber = normalizePlate($("#authPlate").value.trim());
    const identity = validateIin(iin);
    const idCard = validateIdCard(idCardNumber);
    const driver = validateDriverLicense(licenseNumber);
    const plate = plateNumber ? validatePlate(plateNumber) : { ok: role === "renter", text: role === "renter" ? "Госномер не нужен для арендатора" : "Введите госномер авто владельца" };
    const failed = [identity, idCard, driver, plate].find((item) => !item.ok);
    if (failed) return toast(failed.text);

    const name = $("#authName").value.trim() || "Demo User";
    const backendApi = window.ghostrideBackend;
    let authUserId = oldUser?.id || `user-${Date.now()}`;
    if (backendApi?.isReady?.() && backendApi.client?.auth && password) {
      const kind = authContactKind(contact);
      const payload = kind === "email"
        ? { email: contact, password, options: { data: { name, role } } }
        : { phone: contact, password, options: { data: { name, role } } };
      const { data, error } = await backendApi.client.auth.signUp(payload);
      if (error) {
        toast(error.message || "Supabase не создал аккаунт.");
        return;
      }
      authUserId = data.user?.id || authUserId;
    }

    state.user = {
      id: authUserId,
      name,
      contact,
      role,
      iin,
      idCardNumber,
      licenseNumber,
      plateNumber,
      demoPassword: backendApi?.isReady?.() ? undefined : (password || undefined),
      verified: true,
      registeredAt: new Date().toISOString()
    };
    state.users = [state.user, ...state.users.filter((user) => user.id !== state.user.id)];
    state.verifications[state.user.id] = {
      ...(state.verifications[state.user.id] || {}),
      iin,
      idCardNumber,
      licenseNumber,
      plateNumber,
      identity,
      idCard,
      driver,
      plate,
      checkedAt: new Date().toISOString()
    };
    persist();
    closeAuth();
    renderShell();
    initPage();
    toast(`Регистрация готова, ${state.user.name}. Demo-проверка пройдена.`);
  };

  function bookingFineTotal(bookingId) {
    return state.fines.filter((fine) => fine.bookingId === bookingId).reduce((sum, fine) => sum + fine.amount, 0);
  }

  function renderOwnerCalendar(myCars, ownerBookings) {
    const node = $("#calendarPanel");
    if (!node) return;
    if (!myCars.length) {
      node.innerHTML = `<div class="empty">Добавьте машину, чтобы увидеть календарь владельца.</div>`;
      return;
    }
    const days = Array.from({ length: 7 }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() + index);
      return date;
    });
    node.innerHTML = `<div class="calendar-grid">${days.map((date) => {
      const dateKey = date.toDateString();
      const label = new Intl.DateTimeFormat("ru-KZ", { weekday: "short", day: "2-digit", month: "2-digit" }).format(date);
      const busy = ownerBookings.filter((booking) => bookingRange(booking)?.start.toDateString() === dateKey);
      const slots = myCars.map((car) => `<div class="calendar-slot">${safe(car.name)} · ${safe(car.schedule.from)}-${safe(car.schedule.to)} · ${safe(carStatus(car).label)}</div>`).join("");
      const busySlots = busy.map((booking) => {
        const car = state.cars.find((item) => item.id === booking.carId);
        return `<div class="calendar-slot busy">${safe(car?.name || "Авто")} · ${formatBookingPeriod(booking)}</div>`;
      }).join("");
      return `<div class="calendar-day"><strong>${label}</strong>${slots}${busySlots}</div>`;
    }).join("")}</div>`;
  }

  function userTrustScore(myBookings, userFines) {
    const verification = isRenterVerified() ? 18 : 0;
    const rides = Math.min(12, myBookings.length * 3);
    const finesPenalty = Math.min(22, userFines.length * 7);
    return Math.max(40, Math.min(99, 70 + verification + rides - finesPenalty));
  }

  function renderTrustDashboard(myBookings, myCars) {
    const node = $("#trustPanel");
    if (!node) return;
    const myFineList = state.fines.filter((fine) => fine.userId === state.user?.id);
    const score = userTrustScore(myBookings, myFineList);
    const ownerReviews = state.reviews.filter((review) => myCars.some((car) => car.id === review.carId));
    const avgRating = ownerReviews.length ? (ownerReviews.reduce((sum, review) => sum + Number(review.rating || 5), 0) / ownerReviews.length).toFixed(1) : "Нет";
    node.innerHTML = `
      <div class="trust-score"><strong>${score}</strong><p class="muted">Demo Trust Score пользователя. Он растет после проверок и аккуратных поездок, падает после штрафов.</p></div>
      <div class="trust-grid">
        <div class="trust-card"><div class="split"><strong>Документы</strong><span class="status">${isRenterVerified() ? "Проверены" : "Нужна проверка"}</span></div><div class="trust-bar"><span style="width:${isRenterVerified() ? 100 : 35}%"></span></div></div>
        <div class="trust-card"><div class="split"><strong>Поездки</strong><span class="status">${myBookings.length}</span></div><div class="trust-bar"><span style="width:${Math.min(100, myBookings.length * 20)}%"></span></div></div>
        <div class="trust-card"><div class="split"><strong>Штрафы</strong><span class="status ${myFineList.length ? "danger" : ""}">${myFineList.length}</span></div><div class="trust-bar"><span style="width:${myFineList.length ? 35 : 100}%"></span></div></div>
        <div class="trust-card"><div class="split"><strong>Отзывы на ваши авто</strong><span class="status">${avgRating}</span></div><div class="trust-bar"><span style="width:${avgRating === "Нет" ? 25 : Number(avgRating) * 20}%"></span></div></div>
      </div>
    `;
  }

  renderDashboard = function() {
    const userId = state.user?.id || "guest";
    const name = state.user?.name || "Гость";
    const renterVerified = isRenterVerified(userId);
    $("#profileName").textContent = name;
    $("#profileMeta").textContent = state.user ? `${state.user.contact} - ${roleLabel(state.user.role)} - ${renterVerified ? "арендатор проверен" : "нужна проверка"}` : "Зарегистрируйтесь, чтобы начать";
    $("#avatar").textContent = (name[0] || "G").toUpperCase();
    $("#profileLogin").innerHTML = state.user ? `<i data-lucide="log-out"></i>Выйти` : `<i data-lucide="user-plus"></i>Регистрация`;

    const myBookings = state.bookings.filter((booking) => booking.userId === userId);
    const myCars = state.cars.filter((car) => car.ownerId === userId);
    const ownerBookings = state.bookings.filter((booking) => myCars.some((car) => car.id === booking.carId));
    const ownerFines = state.fines.filter((fine) => myCars.some((car) => car.id === fine.carId));
    const renterFines = state.fines.filter((fine) => fine.userId === userId);
    const gross = ownerBookings.reduce((sum, booking) => sum + booking.total, 0);
    const fee = Math.round(gross * 0.2);
    const payout = gross - fee + ownerFines.reduce((sum, fine) => sum + fine.amount, 0);
    const deposits = ownerBookings.filter(isActiveBooking).reduce((sum, booking) => sum + Number(booking.deposit || 0), 0);

    $("#bookingList").innerHTML = myBookings.length
      ? myBookings.map((booking) => {
          const car = state.cars.find((item) => item.id === booking.carId);
          const fineTotal = bookingFineTotal(booking.id);
          return line(
            car?.name || "Авто",
            `${formatBookingPeriod(booking)} - ${booking.duration} - ${booking.method} - депозит ${money(booking.deposit || 0)}${fineTotal ? ` - штраф ${money(fineTotal)}` : ""}`,
            money(booking.total),
            `<button class="btn compact-btn" data-review-booking="${booking.id}" type="button"><i data-lucide="star"></i>Отзыв</button><button class="btn danger compact-btn" data-remove-booking="${booking.id}" type="button"><i data-lucide="trash-2"></i>Удалить</button>`
          );
        }).join("")
      : `<div class="empty">Броней пока нет.</div>`;

    const carLines = myCars.length
      ? myCars.map((car) => {
          const status = carStatus(car);
          const vehicleVerified = isCarPlateVerified(car, userId);
          return line(
            car.name,
            `${car.city} - ${car.rate}₸/мин - ${car.specs?.plate || "госномер не указан"} - ${car.schedule.days.join(", ")} ${car.schedule.from}-${car.schedule.to}`,
            vehicleVerified ? "Авто проверено" : status.label,
            `<div class="status-controls">
              <button class="btn compact-btn" data-car-status="${car.id}" data-status-value="active" type="button">Доступна</button>
              <button class="btn compact-btn" data-car-status="${car.id}" data-status-value="paused" type="button">Пауза</button>
              <button class="btn compact-btn" data-car-status="${car.id}" data-status-value="service" type="button">Сервис</button>
              <button class="btn danger compact-btn" data-remove-car="${car.id}" type="button"><i data-lucide="trash-2"></i>Удалить</button>
            </div>`
          );
        }).join("")
      : `<div class="empty">У вас пока нет авто.</div>`;

    const ownerBookingLines = ownerBookings.length
      ? `<h3>Брони на ваши авто</h3>${ownerBookings.map((booking) => {
          const car = state.cars.find((item) => item.id === booking.carId);
          return line(
            car?.name || "Авто",
            `${formatBookingPeriod(booking)} - депозит ${money(booking.deposit || 0)} - штрафы ${money(bookingFineTotal(booking.id))}`,
            money(booking.total),
            `<button class="btn compact-btn" data-add-fine="${booking.id}" type="button"><i data-lucide="receipt"></i>Штраф demo</button>`
          );
        }).join("")}`
      : "";
    $("#ownerList").innerHTML = carLines + ownerBookingLines;

    $("#walletList").innerHTML =
      line("Баланс владельца", "Доход от оплаченных demo-броней, штрафов и комиссии", money(payout)) +
      line("Комиссия GhostRide", "20% с заказов", money(fee)) +
      line("Депозиты в блокировке", "Сумма активных депозитов по вашим авто", money(deposits)) +
      line("Ваши штрафы", "Штрафы по вашим поездкам", money(renterFines.reduce((sum, fine) => sum + fine.amount, 0))) +
      `<div class="line"><div><strong>Demo Card •••• 7777</strong><p>Карта для выплат подключена</p></div><button class="btn" id="payoutBtn" type="button">Выплата</button></div>`;
    $("#payoutBtn")?.addEventListener("click", () => toast("Demo-выплата создана."));
    renderOwnerCalendar(myCars, ownerBookings);
    renderTrustDashboard(myBookings, myCars);
    renderVerification();
    if (window.lucide) lucide.createIcons();
  };

  function addFine(bookingId) {
    const booking = state.bookings.find((item) => item.id === bookingId);
    if (!booking) return;
    const car = state.cars.find((item) => item.id === booking.carId);
    const existing = state.fines.find((fine) => fine.bookingId === bookingId && fine.reason === "Demo фотофиксация");
    if (existing) return toast("Штраф уже добавлен к этой брони.");
    state.fines.unshift({
      id: `fine-${Date.now()}`,
      bookingId,
      carId: booking.carId,
      ownerId: car?.ownerId,
      userId: booking.userId,
      amount: 5000,
      reason: "Demo фотофиксация",
      status: "charged",
      date: new Date().toLocaleDateString("ru-KZ")
    });
    persist();
    renderDashboard();
    toast("Demo-штраф добавлен к брони.");
  }

  function setCarStatus(carId, status) {
    const car = state.cars.find((item) => item.id === carId);
    if (!car) return;
    if (state.user && car.ownerId !== state.user.id && document.body.dataset.page !== "admin") {
      toast("Статус может менять только владелец авто.");
      return;
    }
    car.availabilityStatus = status;
    persist();
    initPage();
    toast(`Статус авто: ${CAR_STATUS[status]?.label || status}.`);
  }

  function addReview(event) {
    event.preventDefault();
    const carId = event.target.dataset.reviewCar;
    const text = $("#reviewText")?.value.trim();
    if (!text) return toast("Напишите текст отзыва.");
    state.reviews.unshift({
      id: `review-${Date.now()}`,
      carId,
      author: $("#reviewAuthor")?.value.trim() || state.user?.name || "Гость",
      rating: Number($("#reviewRating")?.value || 5),
      text,
      date: new Date().toLocaleDateString("ru-KZ")
    });
    persist();
    renderCarDetails();
    toast("Отзыв добавлен.");
  }

  function removeReview(reviewId) {
    state.reviews = state.reviews.filter((review) => review.id !== reviewId);
    persist();
    renderAdmin();
    toast("Отзыв удален.");
  }

  function approveCurrentUser() {
    if (!state.user) return openAuth();
    const verification = state.verifications[state.user.id] || {};
    state.verifications[state.user.id] = {
      ...verification,
      identity: { ok: true, text: "Подтверждено админом demo" },
      idCard: { ok: true, text: "Удостоверение подтверждено админом demo" },
      driver: { ok: true, text: "Права подтверждены админом demo" },
      plate: verification.plate || { ok: true, text: "Госномер подтвержден админом demo" },
      checkedAt: new Date().toISOString()
    };
    state.user.verified = true;
    state.users = [state.user, ...state.users.filter((user) => user.id !== state.user.id)];
    persist();
    renderAdmin();
    toast("Текущий пользователь подтвержден админом demo.");
  }

  function renderAdmin() {
    const node = $("#adminApp");
    if (!node) return;
    const users = state.users.length ? state.users : (state.user ? [state.user] : []);
    const activeBookings = state.bookings.filter(isActiveBooking);
    const fineTotal = state.fines.reduce((sum, fine) => sum + fine.amount, 0);
    node.innerHTML = `
      <div class="admin-note">GitHub Pages показывает эту панель как demo. Реальные пользователи, оплаты, документы и общая база появятся только после подключения backend и базы данных.</div>
      <div class="admin-grid">
        <div class="admin-stat"><span>Пользователи</span><strong>${users.length}</strong></div>
        <div class="admin-stat"><span>Авто</span><strong>${state.cars.length}</strong></div>
        <div class="admin-stat"><span>Активные брони</span><strong>${activeBookings.length}</strong></div>
        <div class="admin-stat"><span>Штрафы demo</span><strong>${money(fineTotal)}</strong></div>
      </div>
      <div class="admin-sections">
        <article class="panel admin-section">
          <div class="split"><h2>Пользователи</h2><button class="btn primary" data-admin-verify type="button"><i data-lucide="shield-check"></i>Подтвердить меня</button></div>
          ${users.length ? users.map((user) => line(user.name, `${user.contact || "контакт не указан"} - ${roleLabel(user.role)} - ${user.verified ? "проверен" : "не проверен"}`, user.verified ? "OK" : "KYC")).join("") : `<div class="empty">Пользователей пока нет.</div>`}
        </article>
        <article class="panel admin-section">
          <h2>Машины</h2>
          ${state.cars.map((car) => line(car.name, `${car.city} - ${car.specs?.plate || "без номера"} - ${car.schedule.from}-${car.schedule.to}`, carStatus(car).label, `<div class="status-controls"><button class="btn compact-btn" data-car-status="${car.id}" data-status-value="active" type="button">Доступна</button><button class="btn compact-btn" data-car-status="${car.id}" data-status-value="paused" type="button">Пауза</button><button class="btn compact-btn" data-car-status="${car.id}" data-status-value="service" type="button">Сервис</button></div>`)).join("")}
        </article>
        <article class="panel admin-section">
          <h2>Брони и депозиты</h2>
          ${state.bookings.length ? state.bookings.map((booking) => {
            const car = state.cars.find((item) => item.id === booking.carId);
            return line(car?.name || "Авто", `${formatBookingPeriod(booking)} - депозит ${money(booking.deposit || 0)} - ${booking.method}`, money(booking.total), `<button class="btn compact-btn" data-add-fine="${booking.id}" type="button"><i data-lucide="receipt"></i>Штраф</button><button class="btn danger compact-btn" data-admin-remove-booking="${booking.id}" type="button"><i data-lucide="trash-2"></i>Удалить</button>`);
          }).join("") : `<div class="empty">Броней пока нет.</div>`}
        </article>
        <article class="panel admin-section">
          <h2>Отзывы</h2>
          ${state.reviews.length ? state.reviews.map((review) => {
            const car = state.cars.find((item) => item.id === review.carId);
            return line(review.author, `${car?.name || "Авто"} - ${review.rating}/5 - ${review.text}`, review.date, `<button class="btn danger compact-btn" data-remove-review="${review.id}" type="button"><i data-lucide="trash-2"></i>Удалить</button>`);
          }).join("") : `<div class="empty">Отзывов пока нет.</div>`}
        </article>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
  }

  initPage = function() {
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
    if (page === "admin") renderAdmin();
    renderShell();
  };

  document.addEventListener("change", (event) => {
    if (event.target.id === "languageSelect") {
      state.language = event.target.value;
      persist();
      renderShell();
      toast("Язык интерфейса переключен.");
    }
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id === "reviewForm") addReview(event);
  });

  document.addEventListener("click", (event) => {
    const authOpen = event.target.closest("[data-auth-open]");
    const loginOpen = event.target.closest("[data-login-open]");
    const loginClose = event.target.closest("[data-login-close]");
    const socialAuthBtn = event.target.closest("[data-social-auth]");
    const focusContact = event.target.closest("[data-focus-contact]");
    const infoLink = event.target.closest("[data-info-link]");
    const mapPin = event.target.closest("[data-map-car]");
    const statusBtn = event.target.closest("[data-car-status]");
    const fineBtn = event.target.closest("[data-add-fine]");
    const removeReviewBtn = event.target.closest("[data-remove-review]");
    const adminBookingRemove = event.target.closest("[data-admin-remove-booking]");
    const adminVerify = event.target.closest("[data-admin-verify]");
    const reviewBooking = event.target.closest("[data-review-booking]");
    if (authOpen) closeLogin();
    if (loginOpen) {
      event.preventDefault();
      if (state.user) logout();
      else {
        closeAuth();
        openLogin();
      }
    }
    if (loginClose) closeLogin();
    if (socialAuthBtn) socialAuth(socialAuthBtn.dataset.socialAuth);
    if (focusContact) $("#authContact")?.focus();
    if (infoLink) {
      event.preventDefault();
      toast("Юридические документы будут подключены перед реальным запуском.");
    }
    if (event.target.id === "toggleLoginPassword") togglePasswordVisibility();
    if (event.target.id === "forgotPassword") forgotPassword();
    if (event.target.id === "sendLoginCode") sendLoginCode();
    if (event.target.id === "confirmCodeLogin") confirmLoginCode();
    if (event.target.id === "loginSubmit") passwordLogin();
    if (mapPin) location.href = `car-details.html?car=${mapPin.dataset.mapCar}`;
    if (statusBtn) setCarStatus(statusBtn.dataset.carStatus, statusBtn.dataset.statusValue);
    if (fineBtn) addFine(fineBtn.dataset.addFine);
    if (removeReviewBtn) removeReview(removeReviewBtn.dataset.removeReview);
    if (adminBookingRemove) {
      state.bookings = state.bookings.filter((booking) => booking.id !== adminBookingRemove.dataset.adminRemoveBooking);
      persist();
      renderAdmin();
      toast("Бронь удалена из demo-админки.");
    }
    if (adminVerify) approveCurrentUser();
    if (reviewBooking) {
      const booking = state.bookings.find((item) => item.id === reviewBooking.dataset.reviewBooking);
      if (booking) location.href = `car-details.html?car=${booking.carId}`;
    }
  });

  renderShell();
  initPage();
})();
