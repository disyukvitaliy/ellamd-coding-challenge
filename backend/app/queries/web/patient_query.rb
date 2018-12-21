class Web::PatientQuery
  attr_accessor :params, :scope

  def initialize(params, scope = Patient.all)
    @params = params
    @scope = scope
  end

  def call
    result = scope.includes(prescriptions: { ingredient_relations: :ingredient })

    # here may be some filtering or extra querying or some complex logic
    # which we dont want to see in controller
    # result = filter_by_name(params[name]) if params[name]
    # result = filter_by_created_at(params[created_at]) if params[created_at]
    # ...

    result
  end
end