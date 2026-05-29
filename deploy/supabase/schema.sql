create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.gr_users (
  id text primary key,
  name text not null,
  contact text,
  role text not null default 'renter',
  verified boolean not null default false,
  registered_at timestamptz,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gr_cars (
  id text primary key,
  owner_id text,
  owner_name text,
  name text not null,
  year integer,
  city text,
  mode text,
  rate integer,
  trust integer,
  distance text,
  seats integer,
  image text,
  image_source text,
  photo_credit text,
  features jsonb not null default '[]'::jsonb,
  specs jsonb not null default '{}'::jsonb,
  rules jsonb not null default '[]'::jsonb,
  included jsonb not null default '[]'::jsonb,
  schedule jsonb not null default '{}'::jsonb,
  coords jsonb not null default '{}'::jsonb,
  availability_status text not null default 'active',
  vehicle_check jsonb not null default '{}'::jsonb,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gr_bookings (
  id text primary key,
  car_id text not null,
  user_id text not null,
  total integer not null default 0,
  rent_total integer not null default 0,
  service_fee integer not null default 0,
  deposit integer not null default 0,
  method text,
  duration text,
  status text not null default 'active',
  date_text text,
  start_at timestamptz,
  end_at timestamptz,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gr_reviews (
  id text primary key,
  car_id text not null,
  author text not null,
  rating integer not null default 5,
  text text not null,
  date_text text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gr_verifications (
  user_id text primary key,
  iin text,
  id_card_number text,
  license_number text,
  plate_number text,
  identity jsonb not null default '{}'::jsonb,
  id_card jsonb not null default '{}'::jsonb,
  driver jsonb not null default '{}'::jsonb,
  plate jsonb not null default '{}'::jsonb,
  documents jsonb not null default '{}'::jsonb,
  doc_check jsonb not null default '{}'::jsonb,
  checked_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.gr_fines (
  id text primary key,
  booking_id text,
  car_id text,
  owner_id text,
  user_id text,
  amount integer not null default 0,
  reason text,
  status text not null default 'charged',
  date_text text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_gr_users_updated_at on public.gr_users;
create trigger set_gr_users_updated_at before update on public.gr_users for each row execute function public.set_updated_at();

drop trigger if exists set_gr_cars_updated_at on public.gr_cars;
create trigger set_gr_cars_updated_at before update on public.gr_cars for each row execute function public.set_updated_at();

drop trigger if exists set_gr_bookings_updated_at on public.gr_bookings;
create trigger set_gr_bookings_updated_at before update on public.gr_bookings for each row execute function public.set_updated_at();

drop trigger if exists set_gr_reviews_updated_at on public.gr_reviews;
create trigger set_gr_reviews_updated_at before update on public.gr_reviews for each row execute function public.set_updated_at();

drop trigger if exists set_gr_verifications_updated_at on public.gr_verifications;
create trigger set_gr_verifications_updated_at before update on public.gr_verifications for each row execute function public.set_updated_at();

drop trigger if exists set_gr_fines_updated_at on public.gr_fines;
create trigger set_gr_fines_updated_at before update on public.gr_fines for each row execute function public.set_updated_at();

alter table public.gr_users enable row level security;
alter table public.gr_cars enable row level security;
alter table public.gr_bookings enable row level security;
alter table public.gr_reviews enable row level security;
alter table public.gr_verifications enable row level security;
alter table public.gr_fines enable row level security;

drop policy if exists "demo read gr_users" on public.gr_users;
drop policy if exists "demo insert gr_users" on public.gr_users;
drop policy if exists "demo update gr_users" on public.gr_users;
drop policy if exists "demo delete gr_users" on public.gr_users;
create policy "demo read gr_users" on public.gr_users for select using (true);
create policy "demo insert gr_users" on public.gr_users for insert with check (true);
create policy "demo update gr_users" on public.gr_users for update using (true) with check (true);
create policy "demo delete gr_users" on public.gr_users for delete using (true);

drop policy if exists "demo read gr_cars" on public.gr_cars;
drop policy if exists "demo insert gr_cars" on public.gr_cars;
drop policy if exists "demo update gr_cars" on public.gr_cars;
drop policy if exists "demo delete gr_cars" on public.gr_cars;
create policy "demo read gr_cars" on public.gr_cars for select using (true);
create policy "demo insert gr_cars" on public.gr_cars for insert with check (true);
create policy "demo update gr_cars" on public.gr_cars for update using (true) with check (true);
create policy "demo delete gr_cars" on public.gr_cars for delete using (true);

drop policy if exists "demo read gr_bookings" on public.gr_bookings;
drop policy if exists "demo insert gr_bookings" on public.gr_bookings;
drop policy if exists "demo update gr_bookings" on public.gr_bookings;
drop policy if exists "demo delete gr_bookings" on public.gr_bookings;
create policy "demo read gr_bookings" on public.gr_bookings for select using (true);
create policy "demo insert gr_bookings" on public.gr_bookings for insert with check (true);
create policy "demo update gr_bookings" on public.gr_bookings for update using (true) with check (true);
create policy "demo delete gr_bookings" on public.gr_bookings for delete using (true);

drop policy if exists "demo read gr_reviews" on public.gr_reviews;
drop policy if exists "demo insert gr_reviews" on public.gr_reviews;
drop policy if exists "demo update gr_reviews" on public.gr_reviews;
drop policy if exists "demo delete gr_reviews" on public.gr_reviews;
create policy "demo read gr_reviews" on public.gr_reviews for select using (true);
create policy "demo insert gr_reviews" on public.gr_reviews for insert with check (true);
create policy "demo update gr_reviews" on public.gr_reviews for update using (true) with check (true);
create policy "demo delete gr_reviews" on public.gr_reviews for delete using (true);

drop policy if exists "demo read gr_verifications" on public.gr_verifications;
drop policy if exists "demo insert gr_verifications" on public.gr_verifications;
drop policy if exists "demo update gr_verifications" on public.gr_verifications;
drop policy if exists "demo delete gr_verifications" on public.gr_verifications;
create policy "demo read gr_verifications" on public.gr_verifications for select using (true);
create policy "demo insert gr_verifications" on public.gr_verifications for insert with check (true);
create policy "demo update gr_verifications" on public.gr_verifications for update using (true) with check (true);
create policy "demo delete gr_verifications" on public.gr_verifications for delete using (true);

drop policy if exists "demo read gr_fines" on public.gr_fines;
drop policy if exists "demo insert gr_fines" on public.gr_fines;
drop policy if exists "demo update gr_fines" on public.gr_fines;
drop policy if exists "demo delete gr_fines" on public.gr_fines;
create policy "demo read gr_fines" on public.gr_fines for select using (true);
create policy "demo insert gr_fines" on public.gr_fines for insert with check (true);
create policy "demo update gr_fines" on public.gr_fines for update using (true) with check (true);
create policy "demo delete gr_fines" on public.gr_fines for delete using (true);
