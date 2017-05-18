// grab the things we need
var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;


// create a schema
var mobiles_compared_Schema = new Schema({ 
    
    //Documents array to save data from multiple retailers - Includes retailer description, product_ids, URL, 
    //variants, pricing, offers, sales rank
    product_retailers:[{

        retailer_description: 
        {

            retailer_name:{
            type: String
            },

            retailer_id: {
            type: Number,
            //required: true
            }
        
        },

        product_id: 
        {

            mobiles_db_uuid:{
            type: String,
            //required: true,
            //unique: true
            },

            retailer_product_id: {
            type: String,
           // required: true
            }
        
        },

        productURL:{
        type: String  
        },

        product_family:{

            variants: {
            type: Array
            }

        },

        product_pricing:{

            mrp: {
            type: Number
            },

            selling_price: {
            type: Number
            },

            special_price: {
            type: Number
            }

        },

        offers:{
            offer_details:{
            type: Array
            }
        },

        seller_rating:{
            seller_average_rating:{
                type: Number
            }
        },

        product_status:{
        
            available:{
            type: Boolean    
            }

        },

        amazon_info:{
            sales_rank:{
                type: String
            },

            parent_asin:{
                type: String
            }
        },

        listing_status:{
            //If true, product is relevant to be listed
            relevance_listing_status:{
                type: Boolean,
                default: true
            },
            //To check if the relevance status check of the product has been done
            relevance_check_done:{
                type: Boolean
            },

            brand_listing_status:{
                type: Boolean
            },

            variants_match_done:{
                type: Boolean,
                default: false
            }
        },

    }],

    //New UUID generated 
    product_id: 
    {

        uuid:{
        type: String,
        //required: true,
        //unique: true
        }
    
    },

    //Product ID of the product from where all general info is taken
    anchor_product_id: 
    {

        uuid:{
        type: String,
        //required: true,
        //unique: true
        }
    
    },

    anchor_retailer_id:{
        type: Number
    },


    //General Product Info
    product_basic_info:{

        title: {
        type: String
        },

        productBrand:{
        type: String    
        },

        productBrand_normalized:{
        type: String
        },

        normalized_name:{
        type: String
        },

        normalized_name_status:{
        type: Boolean,
        default: false
        }

    },

    //Images
    image_urls:{

        small: {
        type: String
        },

        medium:{
        type: String  
        },

        large:{
        type: String    
        }

    },

    //General specifications
    general_specifications:{
        features:{
        type: Array
        },

        model_number:{
        type: String    
        },

        model_name:{
        type: String
        },

        model_color:{
        type: String
        },

        sim_type:{
        type: String
        }
    },

    //Display specifications
    display_specifications:{
        display_size:{
        type: String
        },

        resolution:{
        type: String
        },

        resolution_type:{
        type: String
        },

        display_type:{
        type: String
        },

        display_colors:{
        type: String
        }

    },

    //OS_Processor
    os_processor:{
        operating_system:{
        type: String
        },

        processor_type:{
        type: String
        },

        processor_core:{
        type: String
        },

        processor_speed:{
        type: String
        }
    },

    //Memory storage
    memory_storage:{
        internal_storage:{
        type: String
        },

        ram:{
        type: String
        },

        expandable_storage:{
        type: String
        }
    },

    //Camera
    camera:{
        primary_camera:{
        type: String
        },

        primary_camera_pixels:{
        type: String
        },

        secondary_camera:{
        type: String
        },

        secondary_camera_pixels:{
        type: String
        }
    },

    //Connectivity
    connectivity:{
        network_type:{
        type: String
        },

        supported_networks:{
        type: String
        },

        bluetooth:{
        type: String
        },

        wifi:{
        type: String
        },

        nfc:{
        type: String
        }

    },

    //Other_features
    other_features:{
        touchscreen_type:{
        type: String
        },

        sim_size:{
        type: String
        }
    },

    battery_power:{
        battery_capacity:{
        type: String
        }
    },

    dimensions:{
        width:{
        type: String
        },

        height:{
        type: String
        },

        depth:{
        type: String
        },

        weight:{
        type: String
        }
    },   

    amazon_info:{
        sales_rank:{
            type: String
        },

        parent_asin:{
            type: String
        }
    }

    

 }, 
	{
    timestamps: true
});


// the schema is useless so far
// we need to create a model using it. Compile the model from the Schema
var Mobiles_compared_model = mongoose.model('mobiles_compared_collection', mobiles_compared_Schema);