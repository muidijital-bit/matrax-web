-- "Top Havuzları" ana kategorisi: Trambolinler'in altına eklenir, top havuzu ürünleri taşınır,
-- "Top, Sünger & Kum Havuzları" kategorisinin adı "Sünger & Kum Havuzları" olur.
-- Paneldeki "Top Havuzları Kategorisini Oluştur" butonuyla aynı işi yapar. Tekrar çalıştırmak zarar vermez.

-- Trambolinler'den sonraki kategorileri bir sıra aşağı kaydır (kategori zaten varsa atlanır)
update public.categories
set sort_order = sort_order + 1
where sort_order > (select sort_order from public.categories where key = 'trambolinler')
  and not exists (select 1 from public.categories where key = 'top-havuzlari');

insert into public.categories (key, name, color, image, sort_order)
select 'top-havuzlari', 'Top Havuzları', 'from-brand-pink to-brand-navy', '/images/galeri-yeni/galeri-7.jpg',
       (select sort_order from public.categories where key = 'trambolinler') + 1
where not exists (select 1 from public.categories where key = 'top-havuzlari');

update public.products
set category_key = 'top-havuzlari', category = 'Top Havuzları', updated_at = now()
where category_key = 'havuzlar' and slug ilike '%top-havuzu%';

update public.categories
set name = 'Sünger & Kum Havuzları', image = '/images/galeri-yeni/galeri-20.jpg'
where key = 'havuzlar' and name = 'Top, Sünger & Kum Havuzları';

update public.products
set category = 'Sünger & Kum Havuzları'
where category_key = 'havuzlar' and category = 'Top, Sünger & Kum Havuzları';
