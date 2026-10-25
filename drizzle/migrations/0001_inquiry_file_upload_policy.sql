-- Private bucket "inquiries": allow anonymous uploads, no reads

CREATE POLICY "inquiry files can be uploaded" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'inquiries');