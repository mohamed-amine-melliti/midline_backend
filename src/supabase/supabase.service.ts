// src/supabase/supabase.service.ts
import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = ' https://ixwstalvpeihdfyysbzx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4d3N0YWx2cGVpaGRmeXlzYnp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3ODI0MDEsImV4cCI6MjA2MjM1ODQwMX0.SVQOc8YQBF7cKXy0AbW4HfIjeuBZasFDIKUdAiOAMGA';

@Injectable()
export class SupabaseService {
  private supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  async getData() {
    const { data, error } = await this.supabase
      .from('clients')
      .select('*');

    if (error) throw error;
    return data;
  }
}
