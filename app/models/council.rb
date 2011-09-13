class Council < ActiveRecord::Base
  belongs_to :region

  def council_type_enum
    ['unitary', 'regional', 'territorial']
    # should return any collection accepted by `FormOptionsHelper#options_for_select`
    # See http://api.rubyonrails.org/classes/ActionView/Helpers/FormOptionsHelper.html#method-i-options_for_select
  end
end
