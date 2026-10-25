-- Model library + manufacturing inquiries

CREATE TABLE public.models (
  code TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  segment TEXT NOT NULL,
  category TEXT NOT NULL,
  fabric TEXT NOT NULL DEFAULT '',
  composition TEXT NOT NULL DEFAULT '',
  colour TEXT NOT NULL DEFAULT '',
  season TEXT NOT NULL DEFAULT '',
  sizes TEXT NOT NULL DEFAULT '',
  moq INTEGER NOT NULL DEFAULT 0,
  tags TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company TEXT NOT NULL DEFAULT '',
  contact_name TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  phone TEXT NOT NULL DEFAULT '',
  country TEXT NOT NULL DEFAULT '',
  model_code TEXT NOT NULL DEFAULT '',
  product_type TEXT NOT NULL DEFAULT '',
  quantity TEXT NOT NULL DEFAULT '',
  timeline TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  file_paths TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.models TO anon;
GRANT SELECT, INSERT ON public.models TO authenticated;
GRANT ALL ON public.models TO service_role;

GRANT INSERT ON public.inquiries TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.inquiries TO authenticated;
GRANT ALL ON public.inquiries TO service_role;

ALTER TABLE public.models ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "models are public" ON public.models FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "inquiries can be submitted" ON public.inquiries FOR INSERT TO anon, authenticated WITH CHECK (true);

INSERT INTO public.models (code, name, segment, category, fabric, composition, colour, season, sizes, moq, tags) VALUES
  ('SBA-WDR-1002', 'Wrap Maxi Dress', 'Women', 'Dresses', 'Viscose Crepe', '95% Viscose, 5% Elastane', 'Ink Navy', 'Resort 2026', 'XS-XL', 300, ARRAY['wrap', 'maxi', 'evening']),
  ('SBA-WAB-1015', 'Classic Abaya', 'Women', 'Modest Fashion', 'Nida Crepe', '100% Polyester', 'Black', 'Autumn/Winter 2026', 'S-XXL', 500, ARRAY['abaya', 'modest', 'everyday']),
  ('SBA-WST-1012', 'Tailored Two-Piece Set', 'Women', 'Sets', 'Wool-Blend Suiting', '70% Polyester, 28% Viscose, 2% Elastane', 'Stone Grey', 'Autumn/Winter 2026', 'XS-XL', 300, ARRAY['tailored', 'two-piece', 'workwear']),
  ('SBA-WBL-1006', 'Relaxed Blouse', 'Women', 'Tops & Shirts', 'Cotton Poplin', '100% Cotton', 'Optical White', 'Spring/Summer 2026', 'XS-XL', 250, ARRAY['blouse', 'relaxed', 'woven']),
  ('SBA-WLG-1009', 'Longline Lounge Set', 'Women', 'Loungewear', 'Modal Jersey', '92% Modal, 8% Elastane', 'Sand', 'Resort 2026', 'S-XL', 300, ARRAY['lounge', 'set', 'knit']),
  ('SBA-MSH-1062', 'Poplin Classic Shirt', 'Men', 'Tops & Shirts', 'Cotton Poplin', '100% Cotton', 'Sky Blue', 'Spring/Summer 2026', 'S-XXL', 500, ARRAY['shirt', 'classic', 'woven']),
  ('SBA-MHD-1007', 'Essential Hoodie', 'Men', 'Sweats', 'Brushed Fleece', '80% Cotton, 20% Polyester', 'Charcoal', 'Autumn/Winter 2026', 'S-XXL', 500, ARRAY['hoodie', 'fleece', 'knit']),
  ('SBA-MPL-1047', 'Slim-fit Polo Shirt', 'Men', 'Tops & Shirts', 'Piqué Cotton', '100% Cotton', 'Bottle Green', 'Spring/Summer 2026', 'S-XXL', 500, ARRAY['polo', 'slim', 'knit']),
  ('SBA-MPT-1025', 'Relaxed Chino Pants', 'Men', 'Bottoms', 'Cotton Twill', '98% Cotton, 2% Elastane', 'Khaki', 'Resort 2026', '30-40', 500, ARRAY['chino', 'trouser', 'woven']),
  ('SBA-MLG-1011', 'Relaxed Lounge Set', 'Men', 'Loungewear', 'Modal Jersey', '92% Modal, 8% Elastane', 'Graphite', 'Autumn/Winter 2026', 'S-XL', 300, ARRAY['lounge', 'set', 'knit']),
  ('SBA-CDR-1020', 'Draped Girls Dress', 'Children', 'Dresses', 'Cotton Voile', '100% Cotton', 'Rose Dust', 'Spring/Summer 2026', '2-12Y', 300, ARRAY['dress', 'girls', 'woven']),
  ('SBA-CST-1049', 'Essential Kids Set', 'Children', 'Sets', 'Organic Cotton Jersey', '100% Cotton', 'Chalk White', 'Resort 2026', '2-12Y', 500, ARRAY['set', 'kids', 'knit']),
  ('SBA-CHD-1121', 'Essential Kids Hoodie', 'Children', 'Sweats', 'Brushed Fleece', '80% Cotton, 20% Polyester', 'Olive', 'Autumn/Winter 2026', '2-12Y', 500, ARRAY['hoodie', 'kids', 'knit']),
  ('SBA-CSL-1004', 'Piped Kids Pyjama', 'Children', 'Sleepwear', 'Cotton Flannel', '100% Cotton', 'Mint', 'Autumn/Winter 2026', '2-12Y', 300, ARRAY['pyjama', 'sleepwear', 'woven']),
  ('SBA-CTS-1014', 'Boxy Kids T-Shirt', 'Children', 'Tops & Shirts', 'Single Jersey Cotton', '100% Cotton', 'Sun Orange', 'Spring/Summer 2026', '2-12Y', 500, ARRAY['t-shirt', 'boxy', 'knit']);