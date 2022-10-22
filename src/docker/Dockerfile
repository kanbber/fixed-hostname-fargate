FROM public.ecr.aws/docker/library/python:3.8-slim

WORKDIR /flask
ENV PYTHONPATH /pipe01

COPY requirements.txt /flask/requirements.txt
RUN pip install -r requirements.txt && pip cache purge

COPY . /flask
CMD ["python", "/flask/app.py"]
