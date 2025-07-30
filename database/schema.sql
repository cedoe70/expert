-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- KYC Requests
CREATE TABLE IF NOT EXISTS kyc_requests (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  full_name TEXT,
  document_type TEXT,
  document_url TEXT,
  status TEXT DEFAULT 'pending',
  submitted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Investment Plans
CREATE TABLE IF NOT EXISTS investment_plans (
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  min_amount NUMERIC,
  max_amount NUMERIC,
  interest_rate NUMERIC
);

-- Investments
CREATE TABLE IF NOT EXISTS investments (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  plan_id INTEGER REFERENCES investment_plans(id),
  amount NUMERIC,
  interest_rate NUMERIC,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Withdrawals
CREATE TABLE IF NOT EXISTS withdrawals (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  amount NUMERIC,
  status TEXT DEFAULT 'pending',
  requested_at TIMESTAMPTZ DEFAULT NOW()
);

-- Deposit Addresses (global config)
CREATE TABLE IF NOT EXISTS deposit_addresses (
  id SERIAL PRIMARY KEY,
  btc_address TEXT,
  eth_address TEXT,
  usdt_address TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Balances (manual admin update)
CREATE TABLE IF NOT EXISTS user_balances (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  balance NUMERIC DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Admin activity log
CREATE TABLE IF NOT EXISTS admin_activity_log (
  id SERIAL PRIMARY KEY,
  action TEXT,
  admin_name TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);
