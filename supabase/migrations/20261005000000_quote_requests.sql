-- Quote requests submitted from the website form, plus a private bucket for
-- the photos attached to them. Visitors can only insert; reading is done by
-- staff in the Supabase dashboard (or a future admin tool with a secret key).

create table public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 120),
  phone text not null check (char_length(phone) between 7 and 40),
  address text not null check (char_length(address) between 1 and 240),
  project_type text not null check (char_length(project_type) between 1 and 80),
  insurance_claim boolean not null,
  details text check (char_length(details) <= 2000),
  photo_paths text[] not null default '{}' check (cardinality(photo_paths) <= 6),
  source_page text check (char_length(source_page) <= 200),
  status text not null default 'new'
    check (status in ('new', 'contacted', 'quoted', 'won', 'lost'))
);

create index quote_requests_created_at_idx on public.quote_requests (created_at desc);

alter table public.quote_requests enable row level security;

create policy "Visitors can submit a quote request"
  on public.quote_requests
  for insert
  to anon
  with check (status = 'new');

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'quote-photos',
  'quote-photos',
  false,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']
);

create policy "Visitors can upload quote photos"
  on storage.objects
  for insert
  to anon
  with check (bucket_id = 'quote-photos');
