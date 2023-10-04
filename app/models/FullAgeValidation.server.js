import '@shopify/shopify-api/adapters/node';
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';
import express from 'express';

const shopify = shopifyApi({
  apiKey: 'f78516f8e43ea82496a9e65ddf46e5ba',
  apiSecretKey: '922a353ea12357477163b0aa7207edc8',
  scopes: ['read_analytics', 'write_assigned_fulfillment_orders', 'read_assigned_fulfillment_orders', 
    'read_customer_events', 'write_custom_pixels', 'read_custom_pixels', 'write_customers', 'read_customers', 
    'write_discounts', 'read_discounts', 'write_discovery', 'read_discovery', 'write_draft_orders', 'read_draft_orders',
    'write_files', 'read_files', 'write_fulfillments', 'read_fulfillments', 'read_gdpr_data_request', 'write_gift_cards',
    'read_gift_cards', 'write_inventory', 'read_inventory', 'write_legal_policies', 'read_legal_policies', 
    'write_locations', 'read_locations', 'write_marketing_events', 'read_marketing_events', 
    'write_merchant_managed_fulfillment_orders', 'read_merchant_managed_fulfillment_orders', 
    'write_metaobject_definitions', 'read_metaobject_definitions', 'write_metaobjects', 'read_metaobjects', 
    'write_online_store_navigation', 'read_online_store_navigation', 'write_online_store_pages', 
    'read_online_store_pages', 'write_order_edits', 'read_order_edits', 'write_orders', 'read_orders', 
    'write_packing_slip_templates', 'read_packing_slip_templates', 'write_payment_customizations', 
    'read_payment_customizations', 'write_payment_terms', 'read_payment_terms', 'write_pixels', 'read_pixels', 
    'write_price_rules', 'read_price_rules', 'write_product_feeds', 'read_product_feeds', 'write_product_listings', 
    'read_product_listings', 'write_products', 'read_products', 'write_publications', 'read_publications'],
  ...
});

const app = express();