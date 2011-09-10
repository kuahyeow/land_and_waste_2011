class Tonnage < ActiveRecord::Base
  belongs_to :region

  YEARS = ['1998', '2001/02', '2010']

  def per_capita
    return nil unless tonnes

    pop = region.populations.where(:year => year_range).first || region.populations.where('year < ?', year.to_i.to_s).first
    if pop
      tonnes / pop.number.to_f
    end
  end

  def self.year_json(year)
    where(:year => year).all.inject(Hash.new){|hash, t| hash[t.region.name] = t.tonnes; hash}.to_json
  end

  protected
  def year_range
    # case year
    # when '1998'
    #   '1996'..'2000'.to_a
    # when '2001/02'
    #   '1999'..'2003'.to_a
    # when '2010'
    #   '2008'..'2012'.to_a
    # end
    single_year = year.to_i
    (single_year-2..single_year+2).to_a
  end
end
