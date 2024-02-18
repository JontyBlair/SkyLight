(function() {
    'use strict';
  
    if (!window.supabase) {
        console.error('Supabase is not available.');
        return;
    }

    var sb = window.supabase;

    var supabaseUrl = 'https://lieweefmzlptwgfheedh.supabase.co';
    var supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZXdlZWZtemxwdHdnZmhlZWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NDA1MjUsImV4cCI6MjAwNzIxNjUyNX0.9tQWKK0_qoxEvFEzOp4ebZNmqiXM5D7YZgaRNft8dLM';
    var supabase = sb.createClient(supabaseUrl, supabaseAnonKey);

    // Expose 'supabase' to the global scope for older browsers that don't support ES6 modules.
    window.myAppSupabase = supabase;
})();
