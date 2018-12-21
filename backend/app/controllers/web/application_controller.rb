class Web::ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid do |e|
    render_validation_error(e.record.errors)
  end

  rescue_from ActiveModel::ValidationError do |e|
    render_validation_error(e.model.errors)
  end

  private

  def render_validation_error(errors)
    render json: {
      error: {
        code: :unprocessable_entity,
        description: 'Cant be persisted',
        errors: errors.messages
      },
    }, status: :unprocessable_entity
  end
end
