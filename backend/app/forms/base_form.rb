class BaseForm
  include ActiveModel::Model
  attr_accessor :object, :attrs

  def initialize(object, attrs)
    @object = object
    @attrs = attrs
    super(attrs)
  end

  def method_missing(name, *args, &block)
    respond_to_missing?(name) ? object.public_send(name, *args, &block) : super
  end

  def respond_to_missing?(name, *_args)
    object.respond_to?(name)
  end
end
